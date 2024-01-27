import mongoose, { mongo } from "mongoose";

async function conectaDatabase(){
  mongoose.connect(process.env.DBCONNECT)
  return mongoose.connection
}

export default conectaDatabase