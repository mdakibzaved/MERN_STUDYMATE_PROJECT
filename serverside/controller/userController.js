import User from "../model/userModel.js"
import bcryptjs from "bcryptjs"

export const signup = async(req,res)=>{
    try {
        const {fullname ,email ,password} = req.body;
        const user = await User.findOne({email})

        if(user){
            return res.status(400).send({message:"User Already Exist!"})
        }

        // Hashing Password
        const hashpwd = await bcryptjs.hash(password,10)  //async task

        const CreatedUser = await User.create({
            fullname,
            email,
            password:hashpwd
        })
        console.log("Created SignUp by backend User:-  ",CreatedUser)
        res.status(201).json({message:" User Created Successfully",user:{CreatedUser}})
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json({message:"Internal Server Error Signup"})
    }
}


export const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email})
        const isMatch = await bcryptjs.compare(password,user.password)

        if(!user || !isMatch) {
            return res.status(400).json({message:"Invalid username or Password"})
        }else{
            res.status(200).json({message:"Login successful" , user:{user}})
        }        
    } catch (error) {
        console.log("Error in SignUp",error.message)
        res.status(500).json({message:"Internal Server Error login"})
    }
}






