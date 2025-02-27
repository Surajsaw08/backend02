import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true,

}))

// to accept json file 
app.use(express.json({
  limit:"16kb"
}))

// to accept throgh url

app.use(express.urlencoded({extended:true ,limit:'16kb'}))

// for folder pdf or assets
app.use(express.static("public"))


// to access the cookie 
app.use(cookieParser())





// export default app

export {app}