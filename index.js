//import the express library
const express = require('express')
console.log("hi sandeep")

//make our app using express,so we will use later this app to make us a server,send get/post request etc
const app  = express()

let pageViews = 0

app.get('/',(req,res)=>{
    pageViews++
    res.send("hello there!")
})

app.get("/views",(req,res)=>{
    pageViews++
    res.send("Total number of Views "+ pageViews)

})



app.listen(8080)