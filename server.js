var express = require('express');
var app = express();

app.get("/",function(req,res){
	res.send("Hello World")
})
const PORT = process.env.PORT;
app.listen(PORT,function(){
	console.log("Listening on port "+PORT)
})