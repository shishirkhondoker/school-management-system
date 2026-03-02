const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true, unique: true },
    classId: { type: mongoose.Schema.Types.ObjectId },
    parentId: { type: mongoose.Schema.Types.ObjectId },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const StudenModel = mongoose.model('students',DataSchema);

module.exports = StudenModel;