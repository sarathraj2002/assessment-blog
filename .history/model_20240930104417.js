const mongoose=require("mongoose");
const blogschema = mongoose.Schema({
    Title:String,
    content:String,
    author:String,
    year:Number

});
const model=mongoose.model('blog',blogschema)

//Write missing code here
