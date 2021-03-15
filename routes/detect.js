require("dotenv").config();

const DetectLanguage = require("detectlanguage");
const detectlanguage = new DetectLanguage(process.env.API_KEY);

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    detectlanguage.detect(req.body.text).then((result) => {
      //console.log(req.body.text, result);

      for (i in result) {
        for (x in result[i]) {
          console.log(result[i][x]);
        }
      }

      res.status(200).json({ result: result, test: "Working" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
