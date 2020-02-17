const mongoose = require('mongoose');
// create the accounts DB schema that sits in MongoDB
const bookingOfficeBiddingSchema =  mongoose.Schema({
    bidUniqueNo: {type : String},
    RtrnjourneyID : {type : String},
    destAddr1 : {type : String},
    destAddr2 : {type : String},
    bidCurrentStatus : {type : String},
    bidExpDt : {type : String},
    bidCreatedBy: {type:String},
    bidCreatedByTm: {type:String},
    bidAmount: {type:String},
});
//Export the Schema
module.exports = mongoose.model('BookingOfficeBiddingSchema', bookingOfficeBiddingSchema);
