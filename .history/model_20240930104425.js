const mongoose=require("mongoose");
const blogSchema = mongoose.Schema({
    Title:String,
    content:String,
    author:String,
    year:Number

});
const model=mongoose.model('blog',blogSchema)

//Write missing code here
