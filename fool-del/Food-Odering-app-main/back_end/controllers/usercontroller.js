import userModel from "../models/usermodel.js";
import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"
import bcryptjs from 'bcryptjs'
import validator from "validator"


// login user
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User Doesn't Exit"})
        }
        const isMatch = await bcryptjs.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid Password"})
        }

        const token = createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"Error"})

    }
}


const createToken = (id) => { 
    return jwt.sign({id},process.env.JWT_SECRET)
}


// register User
const RegisterUser = async (req,res) => {
    const {name,password,email} = req.body;
    try {
        // check user is already exits
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,message:"User is Already exists"})
        }
        // validating email formate & strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please Enter a Valid email"})
        }

        if (password.length<8) {
            return res.json({success:false,message:"please enter strong password"})
        }

        // encrypting password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


export {loginUser,RegisterUser}