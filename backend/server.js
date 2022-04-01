const express = require("express");
const cors = require("cors");
const morgan = require("morgan");


require('./db');

const app = express();
const port = 4000;
const routeAccess = require("./routes.js");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/book", routeAccess);

try {
    app.listen(port, ()=>{
        console.log("server connected and running at port: "+ port);
    })
} catch (err) {
    console.log("Error occured: "+ err.message);
}