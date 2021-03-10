const fs = require('fs');
const glob = require('glob');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

const MODELS_PATH = __dirname + '/**/*.model.ts';
const MODELS_REGEXP = /(?<=\@Entity\(\')(.*)(?=\'\))/;

const getModelsAsync = async () => {
  const files = glob.sync(MODELS_PATH);
  const modelPromises = files.map(async (file) => {
    const fileContent = await readFileAsync(file, 'utf-8');
    return fileContent.match(MODELS_REGEXP)[0];
  });
  return await Promise.all(modelPromises);
}

getModelsAsync().then(console.log);
