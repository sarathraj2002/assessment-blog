const mongoose = require("mongoose");
const mongoDB_URI = "mongodb+srv://sarathraj4602:Sarath2002@cluster0.vtbpe.mongodb.net/BlogDb?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(process.mongoDB_URI).then(()=>{
    console.log('connection established');

}).catch(()=>{
    console.log('Error in connection');
})
//Write missing code here for database connection