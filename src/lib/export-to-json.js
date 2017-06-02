const fs = require('fs');

const exportToJSON = async (response, team, filename) => {
  const json = JSON.stringify(response);
  const directory = `./${team}`;

  if(!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  await fs.writeFile(`./build/${team}/${filename}.json`, json, 'utf8', () => {});
};

module.exports = exportToJSON;
