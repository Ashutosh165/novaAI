import mongoose from 'mongoose';

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!)

        const connection = mongoose.connection;

        connection.on("connected",()=>{
            console.log("MOngo DB connected")
        })

        connection.on("error",(err)=>{
            console.log("Error while connecting to Mongo DB");
            console.log(err);

            process.exit()
        })

    }catch(error){
        console.log("Something went wrong while connecting to the database");
        console.log(error);
    }
}