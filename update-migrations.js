const fs = require('fs');
const Rx = require('rxjs');
const glob = require('glob');
const async = require('async');
const figlet = require('figlet');
const inquirer = require('inquirer');
const { exec } = require('child_process');

const prompts = new Rx.Subject();

const DASH_ERROR = 'dash-in-model';
const CHOSEN_MODEL = 'chosen-model';
const MIGRATION_RUN = 'run-migrations';
const MIGRATION_NAME = 'migration-name';

const MODELS_PATH = __dirname + '/**/*.model.ts';
const MODELS_REGEXP = /(?<=\@Entity\(\')(.*)(?=\'\))/;

const tables = [];

figlet('Migrations Kit', (err, data) => console.log('\x1b[32m' + data + '\n'));

async function generateMigrations(migrationName) {
  const sql = tables.reduce((acc, table) => (acc + `CREATE TABLE IF NOT EXISTS ${table}(); `), '');
  
  await async.series([
    function(next) {
      console.log('Creating of tables started...');
      exec(`npm run typeorm -- query "${sql}"`, err => { console.log(err); next(null, 'one') });
    },
    function(next) {
      console.log('Migrations generating started...');
      exec(`npm run generate -- -n ${migrationName}`, err => { console.log(err); next(null, 'two') });
    },
    function() {
      prompts.next(RUN_MIGRATION_PROMPT);
      prompts.complete();
    }
  ]);
}

const closeCli = () => {
  prompts.complete();
  process.exit(0);
}

const promptsHandler = ({ name, answer }) => {
  if (name === DASH_ERROR || (name === CHOSEN_MODEL && answer === false)) {
    closeCli();
  }
  if (name === MIGRATION_NAME) {
    generateMigrations(answer);
  }
  if (name === MIGRATION_RUN) {
    exec('npm run migration:run', err => { console.log(err); closeCli() });
  }
}
inquirer.prompt(prompts).ui.process.subscribe(promptsHandler);


glob(MODELS_PATH, {}, (err, files) => {

  async.eachSeries(files,

    function(file, cb) {
      fs.readFile(file, 'utf8', function(err, data) {
        const model = data.match(MODELS_REGEXP)[0];
        if (model.includes('-')) {
          console.log('\x1b[31m', `Model ${model} has dash. Change it in "${file}" !`);
          prompts.next(DASH_ERROR_PROPMPT);
        }
        tables.push(model);
        cb();
      });
    },
    function() {
      prompts.next(CHOSEN_MODEL_PROMPT(tables));
      prompts.next(ASK_MIGRATION_NAME_PROMPT);
    },
  );
});

var DASH_ERROR_PROPMPT = {
  type: 'input',
  name: DASH_ERROR,
  message: 'Press enter to exit!',
};

var CHOSEN_MODEL_PROMPT = tables => ({
  type: 'confirm',
  name: CHOSEN_MODEL,
  message: 'Are these models correct?\x1b[32m\n\n' + tables.map(t => '  ' + t).join('\n') + '\n',
});

var ASK_MIGRATION_NAME_PROMPT = {
  type: 'input',
  name: MIGRATION_NAME,
  message: 'Choose name of migration file:',
};

var RUN_MIGRATION_PROMPT = {
  type: 'confirm',
  name: MIGRATION_RUN,
  message: 'Would you like to run migration?',
};
