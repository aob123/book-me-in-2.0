import mongoose, { mongo, Schema } from "mongoose";

const categorySchema = new Schema({
  name: String,
  players: Number,
  duration: Number,
  active: Boolean,
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
