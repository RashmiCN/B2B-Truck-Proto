const mongoose = require('mongoose');
// create the accounts DB schema that sits in MongoDB
const truckLiveTrackSchema =  mongoose.Schema({
    truckLicence: {type : String},
    journeyID : {type : String},
    journeyCreatedDt : {type : String},
    destAddr1 : {type : String},
    destAddr2 : {type : String},
    expStartDt : {type : String},
    expStartTm : {type : String},
    currentLoc: {type:String},
});
//Export the Schema
module.exports = mongoose.model('TruckLiveTrackSchema', truckLiveTrackSchema);
