const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    Username:{
        type:String,
        required:[true,"Username is required"],
        unique:true
    },
    Email:{
        type:String,
        required:[true,"Email is Required"]
    },
    Password:{
        type:String,
        required:[true,"Password is Required"]
    }

})
const User=mongoose.model("User",UserSchema)
module.exports=User;