const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Routes = require('./Routes/index')
const PORT = process.env.PORT || 3128;

// create express app
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("appSecret", "secretforchatgoose");

var routes = new Routes(app)
routes.serupRuotes()

app.listen(PORT, function() {
    console.log(`App running on localhost:${PORT}`);
});

