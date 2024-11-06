import express from 'express'
import connected from './DBConnection/Connection.js';
import Bookapp from './Routes/BooksRoutes.js';

const app = express();
const PORT = 3321;

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("kapil")
})

app.use('/api',Bookapp);

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`)
})