const express = require("express");
const app = express();
var cors = require("cors");

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.options("*", cors());

app.get("/", (req, res) => res.send("Working!!!"));

const detectRouter = require("./routes/detect");
app.use("/detect", detectRouter);

app.listen(process.env.PORT || 3000, function () {
  console.log("server running on port 3000", "");
});
