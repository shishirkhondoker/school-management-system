const TeacherModel = require("../models/TeachersModel.js");



const TeachertListService = async()=>{
     try{
            let data =await TeacherModel.find();
            return {status:"success",data:data}
    
        }catch(e){
            return {status:"fail",data:data}.toString();
        }
}

module.exports ={TeachertListService};