const mongoose = require('mongoose');
// create the accounts DB schema that sits in MongoDB
const truckDetailsSchema =  mongoose.Schema({
    truckLicence: {type : String},
    truckType : {type : String},
    truckDesc : {type : String},
    truckTonnageType : {type : String},
    truckPermitType : {type : String},
    truckRCImage : {type : String},
    truckInsuranceImage : {type : String},
    truckNumberPlateImage : {type : String},
    truckRegdState : {type : String},
});
//Export the Schema
module.exports = mongoose.model('TruckDetailsSchema', truckDetailsSchema);
