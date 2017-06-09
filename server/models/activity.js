var mongoose = require('mongoose');

var Activity = mongoose.model('Activity',{
  activityType: {type: String, required: true},
  subjectUser: {type: String, required: true},
  headerText: {type: String, required: true},
  loggedAt: {type: Date},
  loggedBy: {type: String, required: true },
  activityTime: {type: String, required: true},
  activityDetails: {type: String, required: true}
});

module.exports = {Activity};
