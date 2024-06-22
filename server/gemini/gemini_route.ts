import { Router } from "express";
import {getSuggestion} from  "../gemini/gemini_service";


const router = Router();

router.get("/getItinerary", getSuggestion);


export  default router;