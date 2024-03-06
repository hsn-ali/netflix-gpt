import OpenAI from "openai";
import {logo, OPEN_AI_KEY} from "./constant";

const openAi = new OpenAI({
    apiKey: OPEN_AI_KEY, dangerouslyAllowBrowser: true
});

async function main()  {
    const chat = await openAi.chat.completions.create({
        messages: [{
            role: 'test', content: 'show me funny movies'
        }],
        model: 'gpt-3.5-turbo'
    }).catch((ex) => {
        if (ex.toString().includes('You exceeded your current quota')) {
            alert('We\'re sorry for interruption, Unfortunately we expired our limits for ChatGPT');
        }
    });
}

export default main;