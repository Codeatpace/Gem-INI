import express from "express";
import fetch from 'node-fetch';
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const router = express.Router();

router.post('/Search', async(req, res) => {
    try{
        const name = req.body.name;
        console.log(name)
        // const name = "Hello GPT"
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(name);
        console.log(result.response.text());
        res.json({message: result.response.text()});
    }catch(e){
        console.log(e);
    }
})

export default router;