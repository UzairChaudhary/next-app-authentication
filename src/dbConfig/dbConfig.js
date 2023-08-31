import mongoose from "mongoose";
export async function connect(){
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error while connecting to database");
        console.log(error);
    }
}