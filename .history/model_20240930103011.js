const mongoose=require("mongoose");
const schema = mongoose.Schema({
    Title:String,
    content:String,
    author:String,
    year:Number

});
const models=mongoose.model('blog')

//Write missing code here
