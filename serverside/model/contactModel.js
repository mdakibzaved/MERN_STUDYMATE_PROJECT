
import mongoose from 'mongoose'
const contactSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    messege:{
        type :String
    }
})

const Contact = mongoose.model("Contact",contactSchema)
export default Contact






