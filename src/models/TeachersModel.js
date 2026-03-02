const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    name:{type:String,require:true},
    subject:{type:String,require:true},
    classId:{type:mongoose.Schema.Types.ObjectId}
});

const TeacherModel = mongoose.model("teachers",DataSchema);

module.exports = TeacherModel;