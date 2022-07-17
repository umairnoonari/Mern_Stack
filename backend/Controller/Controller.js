const User=require("../model/User")
const home=async (req,res)=>{
    const user=new User({Username:"Umair",Email:"umairnoonari98@gmail.com",Password:"12345",Image:"Image.png"})
    try
    {
        await user.save()
    }
    catch(er)
    {
        console.log(err)
    }

}
const getAll =  async( req,res)=>
{
    const users =  await User.find();
    res.status(200).send(
        users)
}
const Delete=async (req,res)=>{
    const {id}=req.params;
    console.log(id)
    await User.findByIdAndDelete(id)
    const users=await User.find()
    res.status(200).send(
        users
    )
}
const find= async (req,res)=>{
    const users=await User.findById(req.body.id);
    res.status(200).json({
        users
    })
}
const Update=async (req,res)=>{
    const {Username,Email,Password}=req.body
    const {id}=req.body;

    await User.findByIdAndUpdate({_id:id},{Username:Username,Email:Email,Password:Password}).then(function(){
        res.status(200).json({msg:"Updated"})
    }).catch(function(err)
    {
        res.status(401).json({msg:"Not Updated"})
    });
    // res.status(200).json({
    //     msg:"Success"
    // })
}
const insert=async (req,res)=>
{

    const {Username,Email,Password}=req.body;
    console.log("insertion")
    await User.create({Username,Email,Password},(err,User)=>
    {
        if(err)
        {
            res.status(401).send({msg:"Not Found"})
        }
        else
        res.status(200).json({msg:"Success"})
    })

}
module.exports={home,getAll,insert,Delete,find,Update}


