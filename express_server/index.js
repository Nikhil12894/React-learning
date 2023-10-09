const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3100;
app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get("/api", async (req, res) => {
  res.send({ message: "Hello" });
});
app.get("/*", async (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
