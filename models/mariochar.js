const mongoose=require('mongoose')
const schema=mongoose.Schema

const MarioCarSchema=new mongoose.Schema({
name:String,
weight:Number
});

const MarioChar=mongoose.model('mariochar',MarioCarSchema)

module.exports=MarioChar;