const {TeachertListService} = require("../services/TeachersServices.js");
exports.TeachertList = async(req,res)=>{
    let result = await TeachertListService();
    return res.status(200).json(result);
}