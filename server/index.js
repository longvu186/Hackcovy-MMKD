const express = require('express');
const app = express();
const PORT = process.env.PORT || "80";

app.use('/auth', require('./routes/auth'));
app.use('/person', require('./routes/person'));
app.use('/sms', require('./routes/sms'));

app.get("/",(req,res) => {
    res.send("HI");
});

app.listen(PORT,function(){
    console.log("UP AND RUNNING ON PORT",PORT);
})