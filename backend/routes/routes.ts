import { Router } from "https://deno.land/x/oak/mod.ts";

import { getAllUsers } from '../controllers/getAllUsers.ts';
import { addDevice } from '../controllers/addDevice.ts';
import { addUser } from '../controllers/addUser.ts';
import { login } from '../controllers/login.ts';
import { addQualification } from '../controllers/addQualification.ts';

const router = new Router();

router
.post("/user", addUser)
.post("/device", addDevice)
.post("/login", login)
.post("/qualification", addQualification)
.get("/users", getAllUsers)

export default router;