const express = require("express");
const cors = require("cors");

// define what the app will use
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/github/:username", async (req, res) => {
  const username = req.params.username;

  const response = await fetch(`https://api.github.com/users/${username}`);

  const data = await response.json();

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
