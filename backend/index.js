require("dotenv").config({
    path : '.env'
})
const bodyparser = require('body-parser')
const cors =  require("cors")
const {connectDb} = require("./DB/index")
const router = require('./router')
const express = require("express")
const app = express()
const PORT = process.env.PORT || 2300

connectDb()
app.use(bodyparser.json());
app.use(cors())
app.use('/api/v1/', router)

app.listen(PORT, () => {
    console.log(`listning on port ${PORT}`);
})