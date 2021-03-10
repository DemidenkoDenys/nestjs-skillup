const fs = require('fs');                   // read file content
const Rx = require('rxjs');                 // reactive propmpts
const glob = require('glob');               // finding files by extension
const util = require('util');               // get promised functions
const figlet = require('figlet');           // nice looking title
const inquirer = require('inquirer');       // console prompts - building cli
const { exec } = require('child_process');  // execute commands


const INIT_CLI = 'init-cli';
const DASH_ERROR = 'dash-in-model';
const MIGRATION_RUN = 'migrations-run';
const MIGRATION_NAME = 'migration-name';
const MIGRATIONS_KIT_TITLE = 'Migrations Kit';

const MODELS_PATH = __dirname + '/**/*.model.ts';
const TYPEORM_CMD = 'ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js';
const MODELS_REGEXP = /(?<=\@Entity\(\')(.*)(?=\'\))/;


const readFileAsync = util.promisify(fs.readFile);
const getModelsAsync = async () => {
  console.log('Models getting...');
  const files = glob.sync(MODELS_PATH);
  const modelPromises = files.map(async (file) => {
    const fileContent = await readFileAsync(file, 'utf-8');
    return fileContent.match(MODELS_REGEXP)[0];
  });
  return await Promise.all(modelPromises);
}

const createTables = async (models) => {
  return new Promise((resolve, reject) => {
    console.log('Creating tables...');
    const sql = models.reduce((acc, m) => (acc + `CREATE TABLE IF NOT EXISTS ${m}(); `), '');
    exec(`${TYPEORM_CMD} -- query "${sql}"`, (err, data) => { resolve(); });
  });
}

const generateMigration = async (migrationName) => {
  console.log('Migrations generating started...');
  return new Promise((resolve, reject) => {
    exec(`${TYPEORM_CMD} migration:generate -n ${migrationName}`, err => { console.log(err); if (err) { console.log(err); } resolve(); });
  })
}

const runMigration = async () => {
  console.log('Migrations running...');
  return new Promise((resolve, reject) => {
    exec(`${TYPEORM_CMD} migration:run`, err => { resolve(); });
  })
}

const seedModels = async () => {
  console.log('Migrations seeding...');
  return new Promise((resolve, reject) => {
    exec(`ts-node ./node_modules/typeorm-seeding/dist/cli.js seed`, err => { resolve(); });
  })
}

figlet(MIGRATIONS_KIT_TITLE, (err, data) => {
  console.log('\x1b[32m' + data + '\n');
  CLI().init();
});

function CLI() {
  const prompts = new Rx.Subject();

  prompts.init = () => {
    prompts.next({
      type: 'list',
      name: INIT_CLI,
      message: 'Choose migration action: ',
      choices: ['generate', 'run', 'seed', 'exit']
    });
  }

  prompts.run = () => {
    prompts.next({
      type: 'confirm',
      name: MIGRATION_RUN,
      message: 'Would you like to run migration?',
    });
  }

  prompts.name = () => {
    prompts.next({
      type: 'input',
      name: MIGRATION_NAME,
      message: 'Choose name of migration file:',
    });
  }

  prompts.dash = () => {
    prompts.next({
      type: 'input',
      name: DASH_ERROR,
      message: `Press enter to exit!`,
    });
  }

  prompts.close = () => {
    prompts.complete();
    process.exit(0);
  }

  inquirer.prompt(prompts).ui.process.subscribe(async ({ name, answer }) => {
    if (name === INIT_CLI) {
      if (answer === 'generate') {
        const models = await getModelsAsync();
        if (models.some(m => m.includes('-'))) {
          const dashedModels = models.reduce((acc, m) => m.includes('-') ? `${acc}${m} ` : acc, '');
          console.log('\x1b[31m', `Models '${dashedModels}' are have dash. Correct them to continue migrations.\n`);
          prompts.init();
        }
        await createTables(models);
        prompts.name();
      }

      if (answer === 'exit') {
        prompts.close();
      }

      if (answer === 'seed') {
        await seedModels();
        prompts.init();
      }
    }

    if (name === DASH_ERROR) {
      prompts.close();
    }

    if (name === MIGRATION_NAME) {
      await generateMigration(answer);
      prompts.run();
    }

    if (name === MIGRATION_RUN && answer || name === INIT_CLI && answer  === 'run') {
      await runMigration();
      prompts.init();
    }

    if (name === MIGRATION_RUN && !answer) {
      prompts.init();
    }

  });

  return prompts;
}

