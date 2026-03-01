const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    name:{type:String,required:true},
    section:{type:String,required:true}
},
{
    timestamps:true,versionKey:false
});

const ClassesModel = mongoose.model('classes',DataSchema);

module.exports = ClassesModel;