import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAllUsers } from '../controllers/getAllUsers.ts';
import { addDevice } from '../controllers/addDevice.ts';
import { addUser } from '../controllers/addUser.ts';

const router = new Router();

router
.post("/user", addUser)
.post("/device", addDevice)
.get("/users", getAllUsers)

export default router;