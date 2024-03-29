import express from "express";
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("ponged");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});