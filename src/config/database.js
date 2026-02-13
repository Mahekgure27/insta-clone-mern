const mongoose = require("mongoose")

function connectTOdb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database is connected to server")
    })
}

module.exports = connectTOdb;