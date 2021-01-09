import  BlogSchema  from "./Blog";
import Mongoose from "mongoose";
import UserInterface  from "../interfaces/User";
import BlogInterface from '../interfaces/blog'
import UserSchema from "./User";


export const UserModel = Mongoose.model<UserInterface>("users", UserSchema);
export const BlogModel =Mongoose.model<BlogInterface>("classes",BlogSchema);
