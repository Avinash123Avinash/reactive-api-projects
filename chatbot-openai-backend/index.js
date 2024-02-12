const { OpenAI } = require("openai");
require("dotenv").config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const main = async (userInput) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: userInput }],
    model: "gpt-3.5-turbo",
    max_tokens: 300,
  });
  console.log(chatCompletion.data.choices[0].message.content);
};

main("What is nodejs?");