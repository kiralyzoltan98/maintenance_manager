import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAllUsers } from '../controllers/getAllUsers.ts';

const router = new Router();

router
  .get("/user", getAllUsers)

export default router;