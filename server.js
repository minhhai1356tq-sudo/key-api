const express = require("express");
const app = express();

const keys = {
  "ABC123": true,
  "VIP999": true
};

app.get("/check", (req, res) => {
  const key = req.query.key;

  if (keys[key]) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("API running on port " + PORT);
});