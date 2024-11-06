import express from "express"
import { addToCart,removetoCart,getCart } from "../controllers/cartcontroller.js"
import authMiddelware from "../middelware/auth.js";


const cartRouter = express.Router();


cartRouter.post("/add",authMiddelware,addToCart)
cartRouter.post("/remove",authMiddelware,removetoCart)
cartRouter.post("/get",authMiddelware,getCart)

export default cartRouter;