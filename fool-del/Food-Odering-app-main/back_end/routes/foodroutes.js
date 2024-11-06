import express from 'express'
import { addfood, listFood, removefood } from '../controllers/foodcontroller.js'
import multer from 'multer'

const foodRouter = express.Router();


// image storege engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cd)=>{
        return cd(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addfood)
foodRouter.get('/list',listFood)
foodRouter.post('/remove',removefood)


export default foodRouter;