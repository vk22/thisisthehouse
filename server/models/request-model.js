import { Schema, model } from "mongoose";
const SchemaData = new Schema({
  name1: {
    type: String
  },
  name2: {
    type: String
  },
  email: {
    type: String,
    // unique: true
  },
  phone: {
    type: String,
    //unique: true
  },
  message: {
    type: String
  },
  date: {
    type: Date
  },
  time: {
    type: String
  },
  userData: {
    type: Object
  },
}, { 
  versionKey: false 
})

export const Request = model("Request", SchemaData);