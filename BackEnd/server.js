const express = require('express');
const path = require('path');
//const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
var bodyparser=require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json());
//app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// fetches root files from client/build
//app.use(express.static(path.join(__dirname, 'client', 'build')));

//AWS Hosting mdb urls
mongoose.connect("mongodb://my_user:my_pwd@localhost:27017/PortfolioDB", { useNewUrlParser: true });
//local mdb urls
//mongoose.connect("mongodb://localhost:27017/PortfolioDB", { useNewUrlParser: true });

const Schema = mongoose.Schema;
const memberSchema = new Schema({
    productName : String,
    description : String
});
const Member = mongoose.model("NewPortfolio", memberSchema);

//app.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname, 'fsd-first-app', 'index.html'));
//});

 app.get('/', (req, res) => {
     console.log("/");
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

// app.get('/favicon.ico', (req, res) => {
//     res.sendFile(path.join(`${__dirname}/favicon.ico`));
// });

app.get('/portfolio', (req, res) => {
    Member.find({}, "productName description").then(members => {
        if (members !== null && members.length > 0) {
            res.write(JSON.stringify(members));
            console.log("hello");
            //console.log(mongoose.connection);
            
        } else {
            res.write("No Poetfoli found");
            //console.log(members.length);
            //console.log(mongoose.connection);
            
        }
        res.end();
    });
}).listen(8000);