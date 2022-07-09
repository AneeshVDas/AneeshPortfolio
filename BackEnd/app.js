const express =  require('express');
const PortfolidData = require('./src/model/portfolio');
const cors = require('cors');
var bodyparser=require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json());
//app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.get('/', (req, res)=>{
    res.send("blog server is Up");
})
app.get('/portfolio',function(req,res){
  
    PortfolidData.find()
                .then(function(portfolio){
                    res.send(portfolio);
                    console.log(portfolio);
                });
                
});
//test
app.listen(8000, ()=>{
    console.log("lisening to port 8000-Aneesh");
})

