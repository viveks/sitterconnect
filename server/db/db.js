var mongoose = require ('mongoose');
var {config}  = require ('../../config');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://'+config.mongo.uri+'/'+config.mongo.db);
module.exports = {mongoose};
