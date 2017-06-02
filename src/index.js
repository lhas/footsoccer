const program = require('commander');
const InfoService = require('./services/info-service');

program
  .version('0.0.1')
  .option('-T, --team <name>', 'set the team name desired');

program
  .command('info [team]')
  .description('get team information')
  .action(async (team, options) => {
    const response = await InfoService.parse(team);
  });

program.parse(process.argv);