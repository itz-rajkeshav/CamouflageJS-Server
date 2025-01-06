import express, { Router } from "express";
import { obfuscator } from "./obfuscator.controller.js";
const router=Router();
router.post('/obfuscateCode',obfuscator);
export default router;
