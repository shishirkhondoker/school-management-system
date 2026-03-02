const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    name:{type:String,required:true},
    mobile:{type:String,required:true,uniqure:true},
    address:{type:String,required:true}
},{
    timestemp:true,versionKey:false
});

const ParentModel = mongoose.model("parents",DataSchema);

module.exports = ParentModel;