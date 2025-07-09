const {GoogleGenerativeAI} = require("@google/generative-ai");

const api_Key =  process.env.API_KEY;
const genAi = new GoogleGenerativeAI(api_Key)

const geminiModel = genAi.getGenerativeModel({
    model : "gemini-1.5-flash"
})

module.exports = {
    GeminiModel:geminiModel
}
