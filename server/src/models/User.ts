import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
  },
  { timestamps: true }
);

export default UserSchema;
