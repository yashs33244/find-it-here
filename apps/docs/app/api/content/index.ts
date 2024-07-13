import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI("AIzaSyDU-cu_OwZ4ELN4aTPAAxAZBf1S3vRB188");

export async function run(topic:string) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `give the resources for ${topic} best youtube channels link, and podcasts in a json array format which has href, label and description`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return response; 
}


