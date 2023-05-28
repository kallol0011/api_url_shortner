const express=require("express")
const { connection } = require("./connect")
const cors=require("cors")
const urlRoute=require("./routes/Urlroutes")
const { UrlModel } = require("./model/URLModel")
const dotenv=require("dotenv").config()
const port=process.env.PORT
const app=express()
app.use(express.json())
app.use(cors())

app.use(urlRoute)

app.get("/:shortUrl", async (req, res) => {
    const mainUrl = req.params.shortUrl;
    
    try {
      const data = await UrlModel.findOne({ shortId: mainUrl });
  
      if (data && data.redirectUrl) {
        res.redirect(data.redirectUrl);
      } else {
        res.status(404).send("URL not found");
      }
    } catch (err) {
      console.log(`Error: ${err}`);
      res.status(500).send("Internal Server Error");
    }
  });
  


  const HOSTNAME = "testHost";
app.listen(port,async()=>{
    try{
       await connection
       console.group(`mongodb is connected`)
    }
    catch(err){
         console.log(`error is ${err}`)
    }
    console.log(`server is running on ${port}`)
})