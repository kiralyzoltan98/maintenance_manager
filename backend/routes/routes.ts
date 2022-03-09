import { Router } from "https://deno.land/x/oak/mod.ts";
import { addUser } from '../controllers/addUser.ts';
import { addDevice } from '../controllers/addDevice.ts';
import { getAllUsers } from '../controllers/getAllUsers.ts';

const router = new Router();

router
  .post("/user", addUser)
  .post("/device_add", addDevice)
  .get("/user", getAllUsers)

export default router;