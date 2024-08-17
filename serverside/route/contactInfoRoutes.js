import Express from 'express'
import {contactInfo} from '../controller/contactController.js'

const router = Express.Router()

// Creating Routes 
router.post("/",contactInfo)

export default router;