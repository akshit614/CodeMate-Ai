const express = require("express");
const { GeminiModel } = require("./DB/gemini.config");
const { HistoryModel } = require("./DB");
const router = express.Router()

const error =(msg,status,res)=>res.status(status).json({error:msg})

router.post('/generate', async (req,res) => {
    const {input} = req.body;

    if (!input) {
        return error("Provide a valid input",400,res);
    }

    const prompt = `${input} in markdown with detailed explanation and with notes`

    const result = await GeminiModel.generateContent(prompt)
    const ai_output = result.response.text()

    await HistoryModel.create({
        input,
        ai_output,
        prompt
    })

    res.json({
        msg : "Success",
        input : prompt,
        output : ai_output,

    })

})

router.get('/history', async(req,res) => {

    const history = await HistoryModel.find({}).select("input")
    res.status(200).json(history)
})

router.get('/code/:id', async(req,res) => {
    try {
        
        const history = await HistoryModel.findById(req.params.id).select("-input")
        res.json(history)
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = router