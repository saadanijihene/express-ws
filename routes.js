const express = require("express");

const route = express.Router();
const students = [
  {
    id: 0,
    name: "lily",
    age: 4,
  },
  {
    id: 1,
    name: "luck",
    age: 3,
  },
  {
    id: 2,
    name: "hneya",
    age: 1,
  },
];

route.delete("/delete/:id", (req, res) => {
  let deletedUser = students.filter((student) => student.id != req.params.id);
  res.send({ msg: "student deleted", deletedUser });
});

route.get("/students", (req, res) => {
  res.send(students);
});
route.post("/addStudent", (req, res) => {
  let newStudent = [...students, req.body];
  res.send({ msg: "student added successfully", newStudent });
});
route.put("/updateStudent/:id", (req, res) => {
  let update = students.map((student) =>
    student.id == req.params.id ? { ...student, ...req.body } : student
  );
  res.send({ msg: "student updated", update });
});

module.exports = route;
