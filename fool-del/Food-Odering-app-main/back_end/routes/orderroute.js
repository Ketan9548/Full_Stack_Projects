import express from "express"
import authMiddleware from "../middelware/auth.js"
import { listOrder, placeorder,updateStatus,userOrder,verifyOrder } from "../controllers/ordercontrolar.js"

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeorder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddleware,userOrder)
orderRouter.get("/listorder",listOrder)
orderRouter.post("/status",updateStatus)

export default orderRouter;