const express = require('express')
var fs = require("fs");
const app = express();



app.get('/',(req,res)=>{
        res.send("welcome home")
})

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })
 


var server = app.listen(4040,()=>{
    var host = server.address().host
    var port  = server.address.port

    console.log("app started listening at  http://"+host+' port'+port)

})