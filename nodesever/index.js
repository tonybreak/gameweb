var app = require('express')();
var http = require('http').Servert(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
    res.send("<h1>my webServer</h1>")
});
http.listen(3000,function () {
    console.log("listening on :3000");
})