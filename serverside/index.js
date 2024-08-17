import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoutes from "./route/bookRoutes.js"
import userRoutes from "./route/userRoutes.js"
import contactInfoRoutes from "./route/contactInfoRoutes.js"
import emailRoutes from "./route/emailRoutes.js"
import cors from 'cors'

const app = express();
dotenv.config();    //setup


const PORT =process.env.PORT || 4000
const URI = process.env.MongoDBURI
app.use(cors())
app.use(express.json())
// ___________________________________________

// Connecting from mongoose
try{
    mongoose.connect(URI)
    console.log("Connected Succesfully with mongoose")
}catch(err){
    console.log("Err in connection:",err)
}


// defining routes (API)
app.use("/book",bookRoutes)
app.use("/user",userRoutes)
app.use("/email",emailRoutes)
app.use("/contactInfo",contactInfoRoutes)


app.listen(PORT,()=> console.log("App is Running ",PORT))




