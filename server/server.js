const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

let audience = [];

app.post("/api/join", (req, res) => {

  const data = req.body;

  audience.push(data);

  res.json({
    message: "Audience member added",
    data
  });

});

app.get("/api/audience", (req, res) => {
  res.json(audience);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});