const mongoose = require('mongoose');
// create the accounts DB schema that sits in MongoDB
const testSchema =  mongoose.Schema({
    accountName: {type : String},
    accountChampion : {type : String},
    accomplishment : {type : String},
    plan: {type : String}
});
//Export the Schema
module.exports = mongoose.model('TestSchema', testSchema);