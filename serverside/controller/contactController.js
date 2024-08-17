
import Contact from "../model/contactModel.js"

// Contact Info Provider
export const contactInfo = async (req,res)=> {
    try {
        const {fullname,email,message} = req.body;
        const contactDetails = await Contact.create({
            fullname,
            email,
            message,
        })
        res.status(200).json({message:" Contact Details are Sended !!" ,contact : {contactDetails}})
    } catch (error) {
        console.log("Err:  ",error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

