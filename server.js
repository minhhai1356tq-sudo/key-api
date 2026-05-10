const express = require("express");
const app = express();

const keys = {
  "Hai2000": "https://pastefy.app/YsPPEvsG/raw",
  "VIP999": "https://pastefy.app/abcd1234/raw"
};

app.get("/check", (req, res) => {
  const key = req.query.key;

  if (keys[key]) {
    res.json({
      success: true,
      url: keys[key]
    });
  } else {
    res.json({
      success: false
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API running on port " + PORT);
});
