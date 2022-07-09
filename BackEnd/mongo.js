const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const memberSchema = new Schema({
    productName : String,
    description : String
});
const Member = mongoose.model("NewPortfolio", memberSchema);

mongoose.connect("mongodb://my_user:my_pwd@localhost:27017/PortfolioDB", { useNewUrlParser: true });
//mongoose.connect("mongodb://localhost:27017/PortfolioDB", { useNewUrlParser: true });

const http = require('http');
http.createServer((req, res) => {
    Member.find({}, "PortFolio description").then(members => {
        if (members !== null && members.length > 0) {
            res.write(JSON.stringify(members));
        } else {
            res.write("No Portfoli found");
        }
        res.end();
    });
}).listen(8000);