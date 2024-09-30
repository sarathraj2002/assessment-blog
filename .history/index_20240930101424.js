const express = require("express");

const app = express();
var PORT = 3000;
app.use(express.json());
const blogModel=require('model');
require('connection')
//Write missing code here and all the CRUD operations on the database



app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
