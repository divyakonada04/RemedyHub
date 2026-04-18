// import express from "express";
// import Remedy from "../models/Remedy.js";

// const router = express.Router();

// // GET all remedies
// router.get("/", async (req, res) => {
//   const data = await Remedy.find();
//   res.json(data);
// });

// export default router;

import express from "express";
import Remedy from "../models/Remedy.js";

const router = express.Router();

// ✅ GET all remedies
router.get("/", async (req, res) => {
  try {
    const data = await Remedy.find().lean();
    // Map fields for frontend compatibility
    const formattedData = data.map(item => ({
      ...item,
      category: item.category || item.type,
      title: item.title || item.problem
    }));
    res.json(formattedData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ 🔍 SEARCH API
router.get("/search", async (req, res) => {
  try {
    const query = req.query.q;

    const results = await Remedy.find({
      problem: { $regex: query, $options: "i" }
    }).lean();

    // Map fields for frontend compatibility
    const formattedResults = results.map(item => ({
      ...item,
      category: item.category || item.type,
      title: item.title || item.problem
    }));

    res.json(formattedResults);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;