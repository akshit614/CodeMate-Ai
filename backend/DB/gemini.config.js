const {GoogleGenerativeAI} = require("@google/generative-ai");

const api_Key = "AIzaSyDxEzd-crQo8dXZhvtd1acaYNZeV3NzEJI";
const genAi = new GoogleGenerativeAI(api_Key)

const geminiModel = genAi.getGenerativeModel({
    model : "gemini-1.5-flash"
})

module.exports = {
    GeminiModel:geminiModel
}
