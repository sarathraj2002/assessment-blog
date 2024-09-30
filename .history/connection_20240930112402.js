const mongoose = require("mongoose");
const mongoDB_URL = "mongodb+srv://sarathraj4602:Sarath2002@cluster0.vtbpe.mongodb.net/BlogDb?retryWrites=true&w=majority&appName=Cluster0");
).then(()=>{
    console.log('connection established');

}).catch(()=>{
    console.log('Error in connection');
})
