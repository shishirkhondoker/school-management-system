const express = require("express");
const classController = require("../controllers/classesController.js")
const router = express.Router();

router.get("/classList",classController.ClassList);




module.exports= router;