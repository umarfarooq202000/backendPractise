
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'

dotenv.config({
     path:'./env'
    
    });

const connectDB= async ()=>{
    try {
         // Ensure the connection string includes the proper scheme
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)   
        console.log(`MongoDB CONNECTED: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('MNGODB CONNECTION FAILED', error);
        process.exit(1);
    }
}
export default connectDB;