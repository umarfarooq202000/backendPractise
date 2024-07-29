import dotenv from 'dotenv'
import connectDB from './db/db.js';

dotenv.config({
    path:'./env'
   });

// app.on((err)=>{
//     console.error('Error starting the server:', err);
//     process.exit(1);  // Exit with failure status after printing the error message.
// })


connectDB()
.then(()=>
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
   } )
)
.catch((err)=>{
    console.error('ERROR IN CONNECTION WITH MONGODB:', err);
   // process.exit(1);  // Exit with failure status after printing the error message.
});


// ;( async ()=>{
//       try {
//          await  mongoose.connect(`${process.env.MONGODB_NAME}/${DB_NAME}`)
//       } catch (error) {
//          console.error('Error connecting to MongoDB:', error);
//          throw error
//       }
// })()