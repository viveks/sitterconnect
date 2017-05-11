var {activity} = require('../models/activity');

var logActivity = (req,res) => {
  var newActivity = new activity({
    whatActivity: req.body.whatActivity,
    loggedBy: req.body.loggedBy,
    loggedAt: new Date()
  });

  newActivity.save().then((doc) => {
    console.log('Activity logged: '+JSON.stringify(doc));
    res.status(200).send('OK');
  }, (e) => {
    console.log(e);
    res.status(400).send('NOT OK');
  });
};
module.exports = {
  logActivity
}
