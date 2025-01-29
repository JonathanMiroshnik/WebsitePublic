"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require("axios");
var dotenv = require("dotenv");
var readline = require("readline");
var http = require("http");
var express = require("express");
var app = express();
var path = require('path');
// Load environment variables from .env file
dotenv.config();
// OpenAI API key
var apiKey = process.env.API_KEY_CHATGPT;
var port = process.env.PORT;
if (!apiKey) {
    throw new Error("API_KEY is not defined in the environment variables.");
}
// Function to call the ChatGPT API
function callChatGPT(prompt) {
    return __awaiter(this, void 0, void 0, function () {
        var url, headers, data, response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://api.openai.com/v1/chat/completions";
                    headers = {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(apiKey),
                    };
                    data = {
                        model: "gpt-3.5-turbo",
                        messages: [
                            { role: "system", content: "You are a helpful assistant." },
                            { role: "user", content: prompt },
                        ],
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.post(url, data, { headers: headers })];
                case 2:
                    response = _a.sent();
                    result = response.data.choices[0].message.content;
                    return [2 /*return*/, result];
                case 3:
                    error_1 = _a.sent();
                    if (error_1.response) {
                        console.error("Error calling ChatGPT API:", error_1.response.data);
                    }
                    else {
                        console.error("Error calling ChatGPT API:", error_1.message);
                    }
                    throw new Error("Failed to call ChatGPT API");
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Modify getOutput to accept input
function getOutput(input) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, callChatGPT(input)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error in getOutput:", error_2);
                    throw new Error("Failed to get output");
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Update API route to handle query parameter
app.get('/api/get-output', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userInput, output, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userInput = req.query.input;
                if (!userInput) {
                    res.status(400).json({ error: 'Input query parameter is required' });
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, getOutput(userInput)];
            case 2:
                output = _a.sent();
                console.log(output);
                res.json({ output: output }); // Send the output as a JSON response
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.status(500).json({ error: 'Something went wrong!' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
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
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
// Export the function
// module.exports = { getOutput };
