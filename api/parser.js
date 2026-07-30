// ======================================
// RYOMEN SUKUNA
// AI Response Parser v2.0
// ======================================

export function parseAnalysisResponse(text) {

    if (!text || typeof text !== "string") {

        throw new Error("Gemini returned an empty response.");

    }

    let cleanText = text.trim();

    // Hapus ```json
    if (cleanText.startsWith("```json")) {

        cleanText = cleanText.replace(/^```json\s*/i, "");

    }

    // Hapus ```
    if (cleanText.endsWith("```")) {

        cleanText = cleanText.replace(/```$/, "");

    }

    cleanText = cleanText.trim();

    let data;

    try {

        data = JSON.parse(cleanText);

    } catch {

        throw new Error("Gemini returned invalid JSON.");

    }

    return {

        productName:
            data.productName || "Unknown Product",

        winningScore:
            Number(data.winningScore) || 0,

        grade:
            data.grade || "Unknown",

        targetMarket:
            data.targetMarket || "Unknown",

        strengths:
            Array.isArray(data.strengths)
                ? data.strengths
                : [],

        weaknesses:
            Array.isArray(data.weaknesses)
                ? data.weaknesses
                : [],

        hookIdeas:
            Array.isArray(data.hookIdeas)
                ? data.hookIdeas
                : [],

        aiInsight:
            data.aiInsight ||
            "No AI insight available."

    };

}
