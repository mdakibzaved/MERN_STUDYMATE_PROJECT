
import mongoose from 'mongoose'
const emailSchema = mongoose.Schema({
    email:{
        type:String
    }
})

const Email = mongoose.model("Email",emailSchema)
export default Email






