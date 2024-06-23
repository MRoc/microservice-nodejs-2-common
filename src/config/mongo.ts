import mongoose from "mongoose";

export const throwIfMissingMongoConfig = () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI not found");
  }
};

export const connectMongo = async () => {
  console.log(`Connecting to MongoDb '${process.env.MONGO_URI}'...`);
  await mongoose.connect(process.env.MONGO_URI!);
  console.log("Connected to MongoDb!");
};
