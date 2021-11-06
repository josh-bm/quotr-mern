import express from "express";
import Quote from "../models/quote.js";

const quoteRoutes = express.Router();

quoteRoutes.get("/", async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
});

quoteRoutes.post("/", async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(201);
    res.json(quote);
  } catch (error) {
    res.status(500);
    res.json({
      error: "Quote could not be created",
      details: error.toString(),
    });
  }
});

quoteRoutes.get("/:id", async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (quote) {
      res.json(quote);
    } else {
      res.status(404);
      res.json({ error: "Quote not found" });
    }
  } catch (error) {
    res.status(500);
    res.json({ error: "Something went wrong", details: error.toString() });
  }
});

quoteRoutes.put("/:id", async (req,res) => {
  try{
    const quote = await Quote.findByIdAndUpdate(req.params.id, {$push: { comments: req.body.comments }}, { returnDocument: "after" });
    res.status(201);
    res.json(quote);
  }
  catch(error){
    res.status(500);
    res.json({
      error:"Comment could not be created",
      details:error.toString(),
    });
  }
  console.log(req.body)
});

quoteRoutes.put("/:id", async (req,res) => {
  try{
    const quote = await Quote.findByIdAndUpdate(req.params.id, {$push:{likes:req.body.likes}}, { returnDocument: "after" });
    res.status(201);
    res.json(quote);
  }
  catch(error){
    res.status(500);
    res.json({
      error:"Like could not be created",
      details:error.toString(),
    });
  }
  console.log(req.body)
});


export default quoteRoutes;
