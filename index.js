const express=require("express");

const app=express();
app.get("/",(req,res)=>{
    res.send("WELCOME  Server 1")
})
app.listen (9168,()=>{
console.log("server is running")
})