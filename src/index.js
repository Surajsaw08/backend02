// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config(
  {
    path:"./env"
  }
)

connectDB()
.then(
  ()=>{
    
    app.on("error", (error)=>{
      console.log("ERROR to talk with express" ,error);
      throw error
    })

    app.listen(process.env.PORT || 8000 ,()=>{
      console.log('port is running on port :',process.env.PORT);
      
    })
  }
)
.catch((err)=>{
      console.log('error on connection to db ',err);
      
})

















/*
import express from "express"
const app = express()
(async ()=>{
   try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    app.on("error", (error)=>{
      console.log("ERROR to talk with express" ,error);
      throw error
    })

    app.listen(process.env.PORT,()=>{
      console.log(`app is listining on ${process.env.PORT}`)
    })
   } catch (error) {
    console.error("ERROR :", error)
    throw error
   }
})();
*/