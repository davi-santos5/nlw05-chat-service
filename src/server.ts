import express from "express";

const app = express();
const port = 3335;

app.get("/", (req, res) => {
  return res.json({ message: "Hello there" });
});

app.post("/", (req, res) => {
  return res.json({ message: "Success" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
