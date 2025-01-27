// import mongoose from 'mongoose'

 
// const MONGODB_URI=process.env.MONGO;


// if(!MONGODB_URI){
//     throw new Error("Please define mongo environment variable")
// }
// async function connentToDatabase(){
//     if(mongoose.connection.readyState===1){
//         return mongoose;
//     }
//     const opts= {
//         bufferCammands:false,
//     }
//     await  mongoose.connect(MONGODB_URI!,opts);
//     return mongoose;
// }
// export default connentToDatabase;


// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGO;

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGO environment variable");
// }

// async function connectToDatabase() {
//   if (mongoose.connection.readyState === 1) {
//     return mongoose; 
//   }

//   const opts = {
//     bufferCommands: false, 
//   };

//   try {
//     await mongoose.connect(MONGODB_URI!, opts);
//     console.log("Connected to the database successfully");
//     return mongoose;
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//     throw new Error("Database connection failed");
//   }
// }

// export default connectToDatabase;




import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGO;

if (!MONGODB_URI) {
    throw new Error (" please define mongo environment variable")
}

async function connectToDatabase() {
    if (mongoose.connection.readyState === 1) {
        return mongoose;
    }
    const opts = {
        bufferCommands: false,
    }
    await mongoose.connect(MONGODB_URI!, opts);
    return mongoose;
}

export default connectToDatabase;