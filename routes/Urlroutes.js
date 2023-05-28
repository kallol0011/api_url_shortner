const express=require("express");
const { UrlModel } = require("../model/URLModel");
const shortid=require("shortid")
const urlRoute=express.Router()

urlRoute.get("/",async(req,res)=>{
    let data=await UrlModel.find()
    res.send({"datas":data})
})

urlRoute.post("/",async(req,res)=>{
    const body=req.body;

    if(!body.url) return res.status(400).send({error:"please provide url"})


    // id  
    const shortId=shortid()

    await UrlModel.create({
        shortId:shortId,
        redirectUrl:body.url,
        // visitHistory:[]
    })
     
  return res.json({id:shortId})

})

module.exports=urlRoute