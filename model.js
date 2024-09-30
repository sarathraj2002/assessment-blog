const mongoose=require("mongoose");
const blogSchema = mongoose.Schema({
    Title:String,
    Content:String,
    Author:String,
    Year:Number

});
const blogData=mongoose.model('blogdbatla',blogSchema)
module.exports=blogData


