// require("dotenv").config({path: './env'});
import dotenv from "dotenv";
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import express from "express";
import connectDB from "./db/index.js";

//use this or use line number 1
dotenv.config({
    path: './env'
})

connectDB();















/*
const app = express();

//IFEE function - Immediately Invoked Function Expression
(async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Error",(error)=>{
            console.log("Error: "+error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is running on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("Error: "+error);
    }
})();

*/