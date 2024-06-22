import { Router } from "express";
import { getSuggestion } from "../gemini/gemini_service";


const router = Router();

router.post("/getItinerary", getSuggestion);


export default router;