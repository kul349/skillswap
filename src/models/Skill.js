import mongoose from "mongoose";
const  skillsSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    },
    level:{
        type:String,
        enum:["beginner","intermediate","expert"],
        default:"beginner",
    }
},{
    timestamps:true
})

export default mongoose.models.Skill || mongoose.model("Skill",skillsSchema)