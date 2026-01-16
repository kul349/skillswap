import mongoose from "mongoose";
const swapRequestSchema=new mongoose.Schema({
    fromUser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    toUser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Skill",
        required:true,
    },
    offeredSkill:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Skill",
        required:true
    },
    requestedSkill:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Skill",
        required:true
    },
    status:{
        type:String,
        enum:["pending","accepted","in_progress","completed","rejected"],
        default:"pending"
    }
},{timestamps:true})

export default mongoose.models.SwapRequest || mongoose.model("SwapRequest",swapRequestSchema);