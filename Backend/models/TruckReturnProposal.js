const mongoose = require('mongoose');
// create the accounts DB schema that sits in MongoDB
const truckRetProposalSchema =  mongoose.Schema({
    retJourneyId: {type : String},
    truckID : {type : String},
    retCreatedDt : {type : String},
    retAddr2 : {type : String},
    retAddr1 : {type : String},
    expStartDt : {type : String},
    expStartTm : {type : String},
    tonageAvailable : {type : String},
    tarrifFlatAmt : {type : String},
    tarrifTonneKM : {type : String},
    fullTruckOnly : {type : String},
    midWayDelivery : {type : String},
    detourAccepted : {type : String},
    detourAcceptedKM : {type : String},
    bidAccpetedID : {type : String},
});
//Export the Schema
module.exports = mongoose.model('TruckRetProposalSchema', truckRetProposalSchema);

