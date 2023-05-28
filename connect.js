const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
const mongo_url=process.env.MONGO_URL
const connection = mongoose.connect(`${mongo_url}`)



module.exports={
    connection
}