const config = require('config')
const mongoose = require('mongoose')

const db = config.get("mongoURI")

const connectDb = async() =>{
    try {
        await mongoose.connect(db)
        console.log("MongoDb connected")
    } catch (error) {
        console.error(error)
        // this terminates the process with a failure
        process.exit(1)
    }    
}

module.exports = connectDb

