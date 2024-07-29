import connectDB from './db/db.js';



connectDB()

// ;( async ()=>{
//       try {
//          await  mongoose.connect(`${process.env.MONGODB_NAME}/${DB_NAME}`)
//       } catch (error) {
//          console.error('Error connecting to MongoDB:', error);
//          throw error
//       }
// })()