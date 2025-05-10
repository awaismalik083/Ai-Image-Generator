import mongoose, { mongo } from "mongoose";
const connectdb = async ()=>{
mongoose.set('strictQuery',true);
mongoose.connect('mongodb+srv://awaismalik:eUVERLl3BwiFjZ62@cluster0.rfkdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{console.log('Mongodb Connect')}).catch((err)=>{console.log(err)})
}
export default connectdb;