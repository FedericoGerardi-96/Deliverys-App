import mongoose, { Schema, model, Model } from "mongoose";
import { ICategory } from "../interface";

const categorySchema = new Schema({
  name: { type: String, required: true },
  images: [{ type: String }],
});

categorySchema.index({ title: "text", tags: "text" });

const Category: Model<ICategory> = mongoose.models.Product || model("Product", categorySchema);

export default Category;
