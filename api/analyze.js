// ======================================
// RYOMEN SUKUNA
// King of Curses Analytics API
// ======================================

import { GoogleGenerativeAI } from "@google/generative-ai";

import { AI_MODEL } from "./constants.js";
import { validateProductUrl } from "./validator.js";
import { buildAnalysisPrompt } from "./prompts.js";
import { parseAnalysisResponse } from "./parser.js";

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

export default async function handler(req, res) {

    if (req.method !== "POST") {

        return res.status(405).json({

            success: false,
            error: "Method Not Allowed"

        });

    }

    try {

        const { productUrl } = req.body;

        const validation =
            validateProductUrl(productUrl);

        if (!validation.valid) {

            return res.status(400).json({

                success: false,
                error: validation.message

            });

        }

        const prompt =
            buildAnalysisPrompt(validation.url);

        const model =
            genAI.getGenerativeModel({

                model: AI_MODEL

            });
              const result = await model.generateContent(prompt);

        const response = await result.response;

        const text = response.text();

        const analysis =
            parseAnalysisResponse(text);

        return res.status(200).json({

            success: true,

            analysis

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            error: error.message ||
                   "Internal Server Error"

        });

    }

}
