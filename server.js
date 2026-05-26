const express = require("express");
const app = express();

const keys = {
  "3636": "https://orrxl4-protector.com/api/raw?id=rs1olsb3",
  "VIP999": "https://pastefy.app/TMlop60f/raw"
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
