import dotenv from 'dotenv'
import express from 'express';
import cookieParser from 'cookie-parser';

dotenv.config({
    path:'./env'
   
   });

const app= express();

app.use(cors({
    origin: '*',
}))

app.use(express.json({limit:'16kbs'}))
app.use(express.urlencoded({extended: true,limit:'16kbs'}))
app.use(express.static());
app.use(cookieParser);




export { app}