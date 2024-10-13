require("dotenv").config({
    path : '.env'
})

const mongoose = require("mongoose")

exports.connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL || "mongodb+srv://akkisingh8266:7Ks1540mOobvY0le@cluster0.y6ozh.mongodb.net/CodeMate/")
        console.log(`the db is connect with ${mongoose.connection.host} : host`)
            
    } catch (error) {
        mongoose.disconnect()
        process.exit(1)
    }
}


