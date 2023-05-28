const mongoose=require("mongoose")

const urlSchema= new mongoose.Schema({

  shortId:{
    type:String,
    required:true,
    unique:true
  },

  redirectUrl:{
    type:String,
    required:true,
  },
//   visitHistory:[{timeStamp:{type:true}}]

}
// ,{timeStamp:true}
)


const UrlModel=mongoose.model("urlShortner",urlSchema)

module.exports={
UrlModel
}
