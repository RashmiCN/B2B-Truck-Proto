const mongoose = require('mongoose');
// create the accounts DB schema that sits in MongoDB
const userSchema =  mongoose.Schema({
    userId: {type : String},
    password : {type : String},
    name : {type : String},
    roleCode : {type : String},
    contact : {type : String},
    address1 : {type : String},
    address2 : {type : String},
    pinCode : {type : String},
});
//Export the Schema
module.exports = mongoose.model('UserSchema', userSchema);
