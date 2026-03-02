const express = require("express");
const classController = require("../controllers/classesController.js")
const studentController = require("../controllers/studentController.js")
const router = express.Router();

router.get("/classList",classController.ClassList);
router.get("/StudentList",studentController.StudentList);
router.get("/StudentDetails/:StudentID",studentController.StudentDetails);


module.exports= router;