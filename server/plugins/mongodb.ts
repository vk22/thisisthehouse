import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();
  // console.log('config ', config)

  try {
    await mongoose.connect(config.mongodbUri);
    //await mongoose.connect('mongodb://127.0.0.1:27017/thehouseproject');
    console.log("Connected to MongoDB", config.mode);
  } catch (e) {
    console.error(e);
  }
};