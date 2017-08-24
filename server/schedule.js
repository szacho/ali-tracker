import schedule from 'node-schedule';
import * as models from './models';

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = 0;
rule.hour = 3;
function cleanOldTokens(){
  return schedule.scheduleJob(rule, async function(){
    try {
      let monthInMs = 1000*60*60*24*30;
      const oldTokens = await models.TokenUserModel.deleteMany({ lastUpdate: {$lt: new Date(new Date()-monthInMs)}});
      console.log(`${oldTokens.deletedCount} tokens has been removed.`)
    } catch(err) { console.log(err); }
  });
}

export default cleanOldTokens;
