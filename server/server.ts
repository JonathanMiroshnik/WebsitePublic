const axios = require("axios");
const dotenv = require("dotenv");

const readline = require("readline");
const http = require("http");

const express = require("express");
import { Request, Response } from 'express';
const app = express();
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// OpenAI API key
const apiKey: string | undefined = process.env.API_KEY_CHATGPT;
const port = process.env.PORT;

if (!apiKey) {
    throw new Error("API_KEY is not defined in the environment variables.");
}

// Define the structure of the data sent to the OpenAI API
interface ChatMessage {
    role: "system" | "user" | "assistant";
    content: string;
}

interface ChatCompletionRequest {
    model: string;
    messages: ChatMessage[];
}

interface ChatCompletionResponse {
    choices: {
        message: ChatMessage;
    }[];
}

// Function to call the ChatGPT API
async function callChatGPT(prompt: string): Promise<string> {
    const url: string = "https://api.openai.com/v1/chat/completions";

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
    };

    const data: ChatCompletionRequest = {
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt },
        ],
    };

    try {
        const response = await axios.post(url, data, { headers });
        const result: string = response.data.choices[0].message.content;

        return result;
    } catch (error: any) {
        if (error.response) {
            console.error("Error calling ChatGPT API:", error.response.data);
        } else {
            console.error("Error calling ChatGPT API:", error.message);
        }
        throw new Error("Failed to call ChatGPT API");
    }
}

// Modify getOutput to accept input
async function getOutput(input: string): Promise<string> {
    try {
        const data: string = await callChatGPT(input);
        return data;
    } catch (error: any) {
        console.error("Error in getOutput:", error);
        throw new Error("Failed to get output");
    }
}

// Update API route to handle query parameter
app.get('/api/get-output', async (req: Request, res: Response): Promise<void> => {
    const userInput = req.query.input as string; // Retrieve input from query parameter
    if (!userInput) {
        res.status(400).json({ error: 'Input query parameter is required' });
        return;
    }
    try {
        const output = await getOutput(userInput);
        console.log(output);
        res.json({ output }); // Send the output as a JSON response
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});



// // Function to get output from the API
// async function getOutput(prompt: string): Promise<string> {
//     try {
//         const data: string = await callChatGPT(prompt);
//         return data;
//     } catch (error: any) {
//         console.error("Error in getOutput:", error);
//         throw new Error("Failed to get output");
//     }
// }

// // Create an API route that will call getOutput
// app.get('/api/get-output', async (req: Request, res: Response): Promise<void> => {
//     try {
//         const output = await getOutput(req.body);
//         console.log(output);
//         res.json({ "output": output });  // Send the output as a JSON response
//     } catch (error) {
//         res.status(500).json({ error: 'Something went wrong!' });
//     }
// });

// Serve the index.html file from the root directory
// app.get('/', (req: Request, res: Response): void => {
//     res.sendFile(path.join(__dirname, '../index.html'));  // Serve index.html from the root
// });

// Serve static files (JS, CSS, images) from the "src" folder
// app.use('/src', express.static(path.join(__dirname, 'src')));
// app.use(express.static(path.join(__dirname, '../')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// Export the function
// module.exports = { getOutput };
