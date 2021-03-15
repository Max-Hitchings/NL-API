const DetectLanguage = require("detectlanguage");
const detectlanguage = new DetectLanguage("be352a8c747187e1f629a36365e2ad71");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    detectlanguage.detect(req.body.text).then((result) => {
      console.log(req.body.text, result);
      res.json({ result: result, test: "Working" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
