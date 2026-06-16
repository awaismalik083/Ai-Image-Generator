import mongoose from "mongoose";

{/*  */}
const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://awais:Awais12345@cluster0.roekkkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Error:", err);
  }
};

export default connectdb;