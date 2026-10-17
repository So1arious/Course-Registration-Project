const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const projectRoot = path.join(__dirname, "..");

app.use(express.static(projectRoot));

app.get("/", (request, response) => {
  response.sendFile(path.join(projectRoot, "index.html"));
});

app.listen(port, () => {
  console.log(`Course registration is running at http://localhost:${port}`);
});