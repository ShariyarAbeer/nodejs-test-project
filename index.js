const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
//body data dorar jonno
app.use(express.json({
    limit: '100 mb'
}))
//url data dorar jonno 
app.use(express.urlencoded({
    limit: '100mb',
    extended: true
}))

//@connect Database
const dbURL = `mongodb://localhost:27017/test`
mongoose.connect(dbURL,{useUnifiedTopology: true,useNewUrlParser:true});
const db = mongoose.connection;
db.on('error',()=>{console.error(error);});
db.once('open',()=>console.log(`Mongo Connected. Database: googlesheet. Port: 27017`));



app.use('/api',require('./routes'));


app.listen(port,()=>{
    console.log("Searver Start");
})

// app.get("/",(req,res)=>{
//     res.send({
//         "Abeer":"Tumi"
//     })
// })
