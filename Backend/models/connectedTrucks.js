const mongoose = require('mongoose');
// create the accounts DB schema that sits in MongoDB
const connectedTruckSchema =  mongoose.Schema({
    userId: {type : String},
    seqNbr : {type : number},
    truckLicence : {type : String},
});
//Export the Schema
module.exports = mongoose.model('ConnectedTruckSchema', connectedTruckSchema);
