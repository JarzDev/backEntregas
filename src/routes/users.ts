import { Router} from "express";
import { newUser, loginUser, getUserById } from "../controllers/users.controller";
import logBasicAuth from "../middleware/basic";



const router = Router();


router.post('/login',  loginUser);
router.post('/nuevoloco', logBasicAuth, newUser);
router.get('/:id', logBasicAuth, getUserById);

export {router}; 