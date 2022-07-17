const express=require('express')
const app=express();
const mongoose=require('mongoose')
const cors = require('cors')
const Controller=require("./Controller/Controller")
mongoose.connect('mongodb://127.0.0.1:27017/ead7')

app.use(cors())
app.use(express.json())

app.post('/signup',Controller.insert);
app.get('/userdata',Controller.getAll);
app.get('/delete/:id',Controller.Delete);
app.get('/find/:id',Controller.find);
app.listen(3001,function(){
    console.log("Server is listening at 3001")
})