import Express from 'express'
import { EmailCollection } from "../controller/emailController.js";

const router = Express.Router()

// Creating Routes 
router.post("/",EmailCollection)

export default router;


