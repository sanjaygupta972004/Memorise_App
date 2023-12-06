import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
   {
      title: String,
      message: String,
      creator: String,
      tags: [String],
      selectedFile: String,
      likeCount: {
         type: Number,
         default: 0
      },
   },
   { timestamps: true }
   )

   export const PostMessage = mongoose.model("PostMessage", postSchema);