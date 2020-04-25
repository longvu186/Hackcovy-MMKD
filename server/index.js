const express = require('express');
const app = express();
const PORT = process.env.PORT || "80";

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

app.listen(PORT,function(){
    console.log("UP AND RUNNING ON PORT",PORT);
})