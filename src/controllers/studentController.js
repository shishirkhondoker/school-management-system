
const {
studentDetailsService,
    studentListService
}= require("../services/StudentsServices.js")

exports.StudentList = async(req,res)=>{
    let result = await studentListService();
    return res.status(200).json(result);
}

exports.StudentDetails = async(req,res)=>{
    let result = await studentDetailsService(req);
    return res.status(200).json(result);
}
