const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

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
  res.send({ data: req.body.age });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
