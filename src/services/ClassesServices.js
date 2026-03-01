const ClassesModel = require("../models/classesModel");

const ClassListService = async()=>{
    try{
        let data =await ClassesModel.find();
        return {status:"success",data:data}

    }catch(e){
        return {status:"fail",data:data}.toString();
    }
}



module.exports ={
    ClassListService
}