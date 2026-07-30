// ======================================
// RYOMEN SUKUNA
// AI Response Parser
// ======================================

export function parseAnalysisResponse(text) {

    try {

        const data = JSON.parse(text);

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

    } catch (error) {

        throw new Error(
            "Invalid JSON returned by Gemini."
        );

    }

}
