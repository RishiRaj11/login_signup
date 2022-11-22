import express from 'express';
import cors from 'cors'
import { connection } from './dbconnection.js';
import router from './route/route.js';
const app=express();

app.use(cors());
app.use(express.json())
app.use("/",router)

const PORT=8000;
const URL="mongodb+srv://rraj:12345@cluster0.q3npbsz.mongodb.net/?retryWrites=true&w=majority"
connection(URL);
app.listen(PORT,()=>{
    console.log(`Listen at PORT ${PORT}`);
})