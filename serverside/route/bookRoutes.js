import express from "express"
import { getBook } from "../controller/bookController.js"

const router = express.Router()

// Defining a Routes
router.get('/',getBook)

export default router;
