const mongoose=require("mongoose");

const NewsSchema=mongoose.Schema(
    {
        headline:{
            type:String,
            required:[true,"please enter headline"],
        },
        description:{
            type:String,
            required:[true,"please enter Desc"],
        },
        link:{
            type:String,
            required:false,
            default:0,
        },
        img:{
            type:String,
            required:false,
            default:0,
        },
    },
    {
        Timestamp:true,
    }
);