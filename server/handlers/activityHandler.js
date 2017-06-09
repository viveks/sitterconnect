var {Activity} = require('../models/activity');

var logActivity = (req,res) => {
  var newActivity = new Activity({
    activityType: req.body.activityType,
    subjectUser: req.body.subjectUser,
    headerText: req.body.headerText,
    loggedBy: req.body.loggedBy,
    activityDetails: req.body.activityDetails,
    loggedAt: new Date(),
    activityTime: new Date()
  });

  newActivity.save().then((doc) => {
    console.log('Activity logged: '+JSON.stringify(doc));
    res.status(200).send('OK');
  }, (e) => {
    console.log(e);
    res.status(400).send('NOT OK');
  });
};


var getActivities = (req,res) => {
  Activity.find().then((activities) => {
    res.send({activities});
  }, (e) => {
    res.status(400).send(e);
  });
};

module.exports = {
  logActivity,
  getActivities
}
