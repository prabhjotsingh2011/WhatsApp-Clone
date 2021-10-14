import express from 'express'
import dotenv from 'dotenv'
import Connection from './database/db.js'
import Routes from './routes/Route.js';
import cors from 'cors';
import bodyParser from 'body-parser';





dotenv.config();
const app=express();

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Routes);



const PORT=8000;
const username=process.env.MONGO_USERNAME;
const password=process.env.PASSWORD;


Connection(username,password)
app.listen(PORT,()=>{
    console.log('====================================');
    console.log(`server is running on port ${PORT}`);
    console.log('====================================');
})