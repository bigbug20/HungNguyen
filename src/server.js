import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
import connectDB from "./config/connectDB";
require('dotenv').config();

let app = express();

app.use(bodyParser.json())

viewEngine(app);
initWebRoute(app);

connectDB();

let PORT = process.env.PORT || 6969;
// PORT undifined => 6969


app.listen(PORT, () => {
    console.log("Backend Nodejs is runing on the port:" + PORT)

})