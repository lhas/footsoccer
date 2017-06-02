const Crawler = require("crawler");
const infoParser = require("../parsers/info-parser");
const exportToJSON = require("../lib/export-to-json");

class InfoService {
  async parse(team) {
    const c = new Crawler({
      maxConnections : 10,
    });
    
    c.queue([{
      uri: `http://futpedia.globo.com/${team}`,
      callback: async (error, res, done) => {
        const response = infoParser(res);
        await exportToJSON(response, team, 'info');
        done();
      }
    }]);
  }
}

module.exports = new InfoService();
