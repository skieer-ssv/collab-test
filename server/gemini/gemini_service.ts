const { GoogleGenerativeAI } = require("@google/generative-ai");
import dotenv from "dotenv";
dotenv.config();
const fs = require("fs");
import { Request, Response } from "express";

  const GEMINI_API_KEY= process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);


export async function getSuggestion(req: Request, res:Response) {
const destination = req.query.destination;
const numberOfDays = req.query.numberOfDays;
//budgetType as backpacking, luxury, etc 
const budgetType = req.query.budgetType;
console.log(GEMINI_API_KEY);

const queryForGemini= "Travel Itinerary for " + destination + " for " + numberOfDays + " days." +"Customized for " + budgetType;
console.log("Itinerary suggestion Query is: " + queryForGemini);
if(!GEMINI_API_KEY){
  res.send("Please set GEMINI_API_KEY in .env file");
  return;
}
const result = await getGeminiResponse(genAI, queryForGemini);
  console.log(result.response.text());

  res.send(result.response.text());
}
 

async function getGeminiResponse(genAI:any, queryForGemini: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = await model.generateContent([
      queryForGemini ]
    );
    return result;
}