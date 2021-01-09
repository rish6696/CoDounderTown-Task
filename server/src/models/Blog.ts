import { string } from "joi";
import mongoose, { Schema } from "mongoose";

const BlogSchema: Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
    tags : [{type:String}]
  },
  { timestamps: true }
);

export default BlogSchema;
