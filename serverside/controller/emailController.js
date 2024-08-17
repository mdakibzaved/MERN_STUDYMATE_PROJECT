import Email from "../model/emailModel.js"

// Email Collection
export const EmailCollection = async (req,res)=> {
    try {
        const {email} = req.body;
        const emailCollected = await Email.create({
            email,
        })
        res.status(200).json({message:"Thankks for Your Email", Email: {emailCollected}})
    } catch (error) {
        console.log("Err:  ",error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}



