require('rootpath')();

const express = require('express');
const app = express();
// const PORT = process.env.PORT || "80";
const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./utils/jwt');
const errorHandler = require('./utils/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use('/auth', require('./routes/auth'));
app.use('/person', require('./routes/person'));
app.use('/sms', require('./routes/sms'));
app.use(express.static('./public'));



app.get("/",(req,res) => {
    res.sendFile(`${__dirname}/public/homepage.html`);
});

app.get("/signin",(req,res) => {
    res.sendFile(`${__dirname}/public/signin.html`);
});

app.get("/signup",(req,res) => {
    res.sendFile(`${__dirname}/public/signup.html`);
});

app.get("/view-map",(req,res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/public/map.html`);
});

app.get("/sign_up_success",(req,res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/public/sign_up_success.html`);
});


// use JWT auth to secure the api
// app.use(jwt());
// api routes
app.use('/users', require('./app/controller/user.controller'));
// global error handler
app.use(errorHandler);

// Sign Up =))
const mongoose = require('mongoose');
var db=mongoose.connection; 
app.post('/sign_up', function(req,res){ 
    var phone = req.body.phone;
    var pass = req.body.password;
  
    var data = { 
        "phone" : phone ,
        "password" : pass, 
    } 

    db.collection('Users').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
    }); 
          
    return res.redirect('sign_up_success.html'); 
}) 


// Listen
app.listen(PORT,function(){
    console.log("UP AND RUNNING ON PORT",PORT, "not PORT 80");
})