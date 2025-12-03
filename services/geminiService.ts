import { GoogleGenAI } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from "../constants";

// Initialize the Gemini Client
// NOTE: process.env.API_KEY is assumed to be available in the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendChatMessage = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the chat history for the API
    // We start a new chat session for each logical turn in this simplified service,
    // or we could maintain a chat object. For stateless simplicity in this demo,
    // we will use generateContent but simulate chat history if needed, 
    // OR use the proper chat API. Let's use the Chat API for better context management.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently experiencing high traffic or a connection issue. Please try again later or email me directly.";
  }
};
