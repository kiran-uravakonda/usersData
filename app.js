var express=require('express');
var app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
var data=require('./users.txt')
var router=require('./router')
app.use('/data',router)

app.listen(1000,()=>{
    console.log("server running on 1000 port")
})