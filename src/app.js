const express = require("express");
let app = new express();

app.get("/", function(req,res){
    res.send("Hello from node server !");

});

app.get("/about", function(req,res){
    res.send("nothing interesting about me :p");
});

app.get("*", function(req,res){
    res.send("Nothing here, 404, go away !");
});

let port = 8000;
app.listen(port, function(){
    console.log("Server started at localhost:"+port);
});