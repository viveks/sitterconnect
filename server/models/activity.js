var mongoose = require('mongoose');

var activity = mongoose.model('activity',{
  whatActivity: {type: String, required: true},
  loggedBy: {type: String, required: true },
  loggedAt: {type: Date}
  // whoAll: {type: [String]},
  // where: {type: String},
  // when: {type: Date, required: true},
  // startTime: {type: Date, required: true},
  // endTime: {type: Date, required: true}, // start=end
  // activityType: {type: String, required: true},
  // byWhom: {type: String, required: true },
  // loggedAt: {type: Date},
});

// var activityDetail = mongoose.model('activityDetail'), {
//   whichActivity: {type: Objectid},
//   detailLevel: {type: Number, required: true},
//   detail: {type: String},
//   detailOrder: {type: String}, //handy for multiple same level detail
//   detailOperator: {type: String} //handy for multiple same level detail
// }

module.exports = {activity};
