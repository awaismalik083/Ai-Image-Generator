import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import post from "../Models/postModel.js";
import postModel from "../Models/postModel.js";

const router1 = express.Router();

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLAUDINARY_CLOUD_NAME,
    api_key: process.env.CLAUDINARY_API_KEY,
    api_secret: process.env.CLAUDINARY_API_SECRET,
  });
  
//get post route
// Get all posts
// Get all posts
router1.get('/', async (req, res) => {
  try {
    const posts = await postModel.find({}).sort({ _id: -1 });
    res.status(200).json({ data: posts }); // Wrap in { data: [...] }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


//create post route
router1.post("/", async (req, res) => {
 try {
    const { name, photo, prompt } = req.body;
    if (!name||!photo||!prompt) {
        res.status(401).json({success:false,message:"All fields are required"})
    }
    const imageUrl = cloudinary.uploader.upload(photo);
  
    const newpost = await post.create({
      name,
      prompt,
      photo: (await imageUrl).url,
    });
    res.status(201).json({success:true,message:"Post Successfully Create!",data:newpost})
 } catch (error) {
    res.status(500).json({success:false,message:error})
 }
});

export default router1;
