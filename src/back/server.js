const express = require("express");
const cors = require("cors");

// define what the app will use
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/github/:username", async (req, res) => {
  try {
    const username = req.params.username;

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    // if the code for the response is not 200, return error
    if (!response.ok) {
      return res.status(response.status).json({
        error: data.message || "Could not fetch github user",
      });
    }

    const BasicInfo = {
      avatar: data.avatar_url,
      name: data.name || data.login,
      bio: data.bio,
      location: data.location,
      url: data.html_url,
      dateJoined: data.created_at,
    };

    res.json(BasicInfo);
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong while fetching GitHub user",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
