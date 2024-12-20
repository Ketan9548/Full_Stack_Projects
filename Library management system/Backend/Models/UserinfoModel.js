import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    Username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = new mongoose.model("User", UserSchema);
