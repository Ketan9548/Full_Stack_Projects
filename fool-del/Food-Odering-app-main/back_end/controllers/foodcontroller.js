import { deserialize } from "v8";
import foodmodel from "../models/foodmodel.js";
import fs from 'fs'

// add food item
const addfood = async (req, res) => {
    let image_filename = `${req.file.filename}`

    const food = new foodmodel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//add food list
const listFood = async (req,res) =>{
    try {
        const foods = await foodmodel.find({});
        res.json({success:true,data:foods})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,massage:"Error"})
    }
}

//remove food item
const removefood = async (req,res) => {
    try {
        // find the food model 
        const food = await foodmodel.findById(req.body.id);
        // delete the food item 
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodmodel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


export { addfood ,listFood , removefood}