import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

// console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
const connectDB = async ()=>{
  try {

   const connectionInstance = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   console.log(`\n mongodb connected !! DB_HOST :${connectionInstance.connection.host}`);
   
    
  } catch (error) {
    console.log("Mongodb connection error",error);
    process.exit(1);
  }
}

export default connectDB;