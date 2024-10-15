require("dotenv").config({
    path : '.env'
})

const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`the db is connect with ${mongoose.connection.host} : host`)
            
    } catch (error) {
        console.log(error.message);
        mongoose.disconnect()
        process.exit(1)
    }
}

const Schema = new mongoose.Schema({
    input : {
        type : String,
        require : true
    },
    output : {
        type : String,
        require : true
    },
    prompt : {
        type : String,
        require : true
    }
},{
    timestamps: true
})

const HistoryModel = new mongoose.model('History', Schema)

module.exports = {HistoryModel, connectDb}


