
import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisResult } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzePrompt = async (prompt: string): Promise<AnalysisResult> => {
  if (!prompt.trim()) {
    return { strengths: [], weaknesses: [], suggestions: [] };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: `Você é um especialista em engenharia de prompts de classe mundial. Analise o seguinte prompt e forneça feedback construtivo. Foque na clareza, especificidade, contexto e potencial para ambiguidade. Retorne a análise em um formato JSON estruturado com as chaves "strengths", "weaknesses", e "suggestions". As sugestões devem ser acionáveis e explicar o porquê da melhoria. Cada chave deve conter um array de strings.

      Prompt para analisar:
      ---
      ${prompt}
      ---
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
            weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
            suggestions: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: ["strengths", "weaknesses", "suggestions"],
        },
      },
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);
    return result;

  } catch (error) {
    console.error("Error analyzing prompt:", error);
    throw new Error("Falha ao analisar o prompt. A resposta da API pode não estar no formato JSON esperado.");
  }
};

export const enhancePrompt = async (prompt: string): Promise<string> => {
   if (!prompt.trim()) {
    return "";
  }
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Você é um especialista em engenharia de prompts de classe mundial. Re-escreva o seguinte prompt para torná-lo significativamente mais eficaz, claro, e detalhado. Adicione contexto, especifique o formato de saída desejado e use uma linguagem precisa. A nova versão deve ser um substituto direto e pronto para uso.

      Prompt original:
      ---
      ${prompt}
      ---

      Prompt melhorado:
      `,
      config: {
        temperature: 0.7,
      },
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error enhancing prompt:", error);
    throw new Error("Falha ao melhorar o prompt.");
  }
};
