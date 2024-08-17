import Express from "express"
import { signup,login} from "../controller/userController.js";

const router = Express.Router()

// Creating Routes 
router.post("/signup",signup)
router.post("/login",login)



export default router;


