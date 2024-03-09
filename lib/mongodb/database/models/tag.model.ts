// Import necessary modules from Mongoose
import { Document, Schema, model, models } from "mongoose";

// Define interface for Tag document
export interface ITag extends Document {
  _id: string;
  name: string;
}

// Define schema for Tag document
const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

// Create Tag model based on TagSchema
const Tag = models.Tag || model<ITag>('Tag', TagSchema);

// Export Tag model
export default Tag;
