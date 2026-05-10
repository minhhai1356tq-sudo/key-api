const express = require("express");
const app = express();

const keys = {
  "Hai2000": true
};

app.get("/check", (req, res) => {
  const key = req.query.key;

  if (!keys[key]) {
    return res.json({ success: false });
  }

  return res.json({
    success: true,
    script: "https://pastefy.app/p3QVnLHs/raw"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("running"));
