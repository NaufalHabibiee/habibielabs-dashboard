const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files dari folder public
app.use(express.static(path.join(__dirname, "public")));

// Route utama -> kirim index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Health check (berguna untuk Railway)
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "habibielabs-dashboard" });
});

app.listen(PORT, () => {
  console.log(`Dashboard running on port ${PORT}`);
});