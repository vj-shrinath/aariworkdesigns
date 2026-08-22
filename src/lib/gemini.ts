import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const modelName = process.env.GEMINI_MODEL || 'gemini-3.1-flash-lite';

export async function getOptimizedAmazonQuery(semanticKeywords: string[], fallbackKeyword: string): Promise<string> {
  if (!process.env.GEMINI_API_KEY || semanticKeywords.length === 0) {
    return fallbackKeyword;
  }

  try {
    const prompt = `
      You are an expert Amazon Affiliate marketer and SEO specialist specializing in Aari embroidery.
      Given the following semantic keywords extracted from a blog post, determine the single most relevant, highly-converting product search query for Amazon India.
      
      Keywords: ${semanticKeywords.join(', ')}
      
      Rules:
      1. Return ONLY the search query string, nothing else. No quotes, no markdown, no explanation.
      2. The query must be something a real crafter would type into Amazon (e.g. "Tulip Aari Needle size 14" or "Gold French Zardosi Wire").
      3. Keep it under 6 words for best Amazon search results.
    `;

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        temperature: 0.1, // Keep it highly deterministic
      }
    });

    const optimizedQuery = response.text?.trim().replace(/['"]/g, '');
    return optimizedQuery || fallbackKeyword;

  } catch (error) {
    console.error('Error optimizing Amazon query with Gemini:', error);
    return fallbackKeyword;
  }
}
