const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');


const AccountSchema  = require('./models/account');
const TestSchema  = require('./models/test');
const app = express();

// Request Body Parsers go here ---------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database setup details go here ---------------------------------
var url = "mongodb://localhost:27017/dashboard";

mongoose.Promise = global.Promise;
mongoose.connect(url,{ useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('Connected to Mongo')
});

// CORS enablement-------------------------------------------------
app.options('*', cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

// End Point "/acctdetail" from OverallDetails" -------------------
app.use('/acctdetail',(req, res, next) => {
    console.log("in express");     
    AccountSchema.find().then(documents => {
        res.status(200).json({
            // message:"posting from express",
            accounts :documents
        })
    })
    
});

// End Point "/projectData" from OverallDetails" -------------------
app.get('/projectData/:selected',(req, res, next) => {
    console.log("account passed" + selected);
    var selected = req.params.selected;
    console.log("account passed" + selected);
    console.log("in express projectData");
    if(selected === 'undefined'){
        selected="H E Butt Grocery";
    }     
    AccountSchema.find({accountName : selected}).then(documents => {
        res.status(200).json({
            // message:"posting from express",
            accounts :documents
            // documents
        })
    })
    
});


//Post an account to Mongo DB
app.post("/postAccount",(req, res, next) => {
    const acctspostd= req.body;
    const acct = new AccountSchema(req.body);
    acct.save((error,result) => {
        if(error) { return res.status(500).send({message: 'saving user error'}) }
        res.status(200).send({message: 'Success'})
        console.log("Data Posted");
    })
})
// export the app
module.exports = app;



