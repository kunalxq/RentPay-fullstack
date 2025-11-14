import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        mongoose.connection.on('connected', ()=> console.log("Datbase connnected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/rent-pay`)
    } catch(error) {
        console.log(error.message);
    }
}

export default connectDB;