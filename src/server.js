const express = require("express");
const fs = require("fs");
const path = require("path");

const { myFunction, myOtherFunction } = require("./middleware/auth");

const app = express();
const public_directory = path.join(__dirname, "../public");

app.use(express.json());
app.use(myFunction);
app.use(myOtherFunction);
app.use(express.static(public_directory));

app.get("/data", (req, res) => {
  console.log(req.query);
  res.send({ message: `Hello, your name is ${req.query.name}` });
});

app.get("/something", (req, res) => {
  res.send({ name: "dan", age: 35 });
});

app.get("/dog", (req, res) => {
  res.send("woof");
});

app.get("/dog/:id", (req, res) => {
  console.log(req.params);
  res.send("success");
});

app.get("/person/:id", (req, res) => {
  console.log(req.params.id);
  res.send("random");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ data: req.body });
});

app.post("/task", (req, res) => {
  console.log(req.body);
  fs.writeFileSync("tasks.txt", req.body.task);
  res.send("success");
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
