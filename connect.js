const mongoose=require("mongoose")

const connection = mongoose.connect(`mongodb+srv://kallol:kallol123@cluster0.pbmmntq.mongodb.net/urlShortner?retryWrites=true&w=majority`)



module.exports={
    connection
}