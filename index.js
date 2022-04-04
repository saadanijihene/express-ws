const express = require("express");
const app = express();
const PORT = 5001;
const route = require("./routes");
app.use("/routes", route);
app.use(express.json());
app.listen(PORT, (err) =>
  console.log(`server is up and running on port ${PORT}`)
);
/*----------------------------------*/
// app.get("/", (req, res) => {
//   res.send("<h1> hello</h1>");
// });
const path = require("path");
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});
