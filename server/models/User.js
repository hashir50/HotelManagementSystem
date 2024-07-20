import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
      required: true,
    },
    isActive: {
      type: Boolean
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    }
  }
);



export default model('User', userSchema);