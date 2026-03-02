const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;
const  StudentModel  = require("../models/StudentsModel.js");

const studentListService = async () => {
  try {
    const data = await StudentModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", error: e.message }; // use e.message instead of undefined "data"
  }
};




const studentDetailsService = async(req)=>{
       try{
        let StudentID = new ObjectID(req.params.StudentID);
        let MatchStage = {$match:{_id:StudentID}}
        let JoinClassStage = ({$lookup:{from:"classes",localField:"classId",foreignField:"_id",as:"class"}});
        let JoinMarkStage = ({$lookup:{from:"marks",localField:"_id",foreignField:"studentId",as:"marks"}});
          let JoinParentStage = ({$lookup:{from:"parents",localField:"parentId",foreignField:"_id",as:"parent"}});
        let UnwindClass = {$unwind:"$class"}
        let Unwindmarks = {$unwind:"$marks"}
        let Unwindparent = {$unwind:"$parent"}
      let ProjectionStage = {
      $project: {
        name: 1,
        image: 1,
        class: { name: 1, section: 1 },
        marks: 1,
        parent:1
      },
    };


        let data =await StudentModel.aggregate([
            MatchStage,
            JoinClassStage,
            JoinMarkStage,
            UnwindClass,
            Unwindmarks,
            JoinParentStage,
            Unwindparent,
            ProjectionStage
        ]);
        return {status:"success",data:data}

    }catch(e){
        return {status:"fail",data:data}.toString();
    }
}

module.exports ={
    studentDetailsService,
    studentListService
}