import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/mernviernes");
    console.log("base de datos conectada");
  } catch (error) {
    console.log(error)
  }
};
 