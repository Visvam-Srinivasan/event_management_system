import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Backend working");
});

const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});