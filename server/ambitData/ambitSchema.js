var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ambitSchema = new Schema({
  name: {type: String, index: true}, //three letters and then a number for repeats
  coords: {
    latitude: Number,
    longitude: Number
  },
  weekdays: {
    mon: Boolean,
    tue: Boolean,
    wed: Boolean,
    thu: Boolean,
    sat: Boolean,
    sun: Boolean
  },
  startDate: Date,
  checkIns: [Date] // a history of successful check-ins
  //time (when during the day are you supposed to check in)
  //repeats (every week? every other week? is this necessary?)
});

var Ambit = mongoose.model('Ambit', locationSchema);

module.exports = Ambit;