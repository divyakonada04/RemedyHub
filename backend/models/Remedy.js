import mongoose from "mongoose";

const remedySchema = new mongoose.Schema({
  type: String,
  problem: String,
  skinType: String,
  hairType: String,
  ingredients: [String],
  steps: [String],
  tips: [String],
});

export default mongoose.model("Remedy", remedySchema);