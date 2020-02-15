const mongoose = require('mongoose');
// create the accounts DB schema that sits in MongoDB
const accountSchema =  mongoose.Schema({
    accountName: {type : String},
    accountChampion : {type : String},
    projectData: [{projectId : {type : Number},
        projectName: {type : String},
        techStack : {type : String},
        agile : {type : Boolean},
        targetFTEon : {type : Number},
        targetFTEoff : {type : Number},
        mainSpring : {type : Boolean},
        nonAgile : {type : String},
        baseline : {velocity : {type : Number},
                    quality : {type : Number},
                    automation : {type : Number}},
        goal : {velocity : {type : Number},
                quality : {type : Number},
                automation : {type : Number}}}],
    accomplishment : {type : String},
    plan: {type : String}
});
//Export the Schema
module.exports = mongoose.model('AccountSchema', accountSchema);