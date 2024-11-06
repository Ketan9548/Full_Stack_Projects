import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodroutes.js'
import userRouter from './routes/userroutes.js'
import 'dotenv/config.js'
import cartRouter from './routes/cartroute.js'
import orderRouter from './routes/orderroute.js'


// app
const app = express()
const port = process.env.PORT || 4500;


// middelware
app.use(express.json())
app.use(cors())


// DB Connection
connectDB();


// apim endpoints
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


// get the data in front-end using get()
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})