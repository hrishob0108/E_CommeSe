const mongoose = require('mongoose')
module.exports=async()=>{
    try{
    await mongoose.connect('mongodb://127.0.0.1:27017', {useNewUrlParser:true, useUnifiedTopology:true})
    console.log(`mongo db connected successfully`)
    }
    catch(e){
      console.log(`something went wrong ${e.message}`)
      process.exit(0)
    }
}