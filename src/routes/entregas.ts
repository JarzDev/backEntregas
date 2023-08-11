import { Router} from "express";
import { getItems, getItem, postItem, putItem, deleteItem, getItemsByuserId, getItemsByMes, getItemsByMesAndUser_id } from "../controllers/entregas.controller";
import FireAuth from "../middleware/firelog";
import { checkJwt } from "../middleware/session";


const router = Router();

router.get('/' , checkJwt,getItems );
router.get('/:id' ,checkJwt, getItem);
router.get('/user/:id', checkJwt, getItemsByuserId);
router.post('/' ,checkJwt, postItem);
router.put('/:id' ,checkJwt, putItem);
router.delete('/:id',checkJwt, deleteItem);
router.get('/mes/:mes',checkJwt, getItemsByMes);
router.get('/mesid/:mes/user/:id',checkJwt, getItemsByMesAndUser_id);

export {router};