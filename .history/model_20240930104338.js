const mongoose=require("mongoose");
const schema = mongoose.Schema({
    Title:String,
    content:String,
    author:String,
    year:Number

});
const models=mongoose.model('blog',blogschema)

//Write missing code here
