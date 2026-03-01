const {ClassListService} =require("../services/ClassesServices.js");

exports.ClassList = async(req,res)=>{
    let result = await ClassListService();
    return res.status(200).json(result);
}