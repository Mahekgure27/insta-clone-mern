const mongoose = require("mongoose")

async function connectTOdb(){
  await  mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database is connected to server")
    })
}

module.exports = connectTOdb;