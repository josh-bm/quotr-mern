import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  comments: [{
    type: String
  }],
  likes: {
  type: Number,
  default: 0
},
});

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
