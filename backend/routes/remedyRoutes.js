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
    const data = await Remedy.find();
    res.json(data);
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
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;