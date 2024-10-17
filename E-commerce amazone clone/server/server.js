require("dotenv").config()
const express =  require("express")
const app = express();

const port = 5000

app.listen(port,()=>{
    console.log(`server is start port number is ${port}`)
})