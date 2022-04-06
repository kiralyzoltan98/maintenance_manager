import { Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import { getAllUsers } from '../controllers/getAllUsers.ts';
import { getAllDevice } from '../controllers/getAllDevice.ts';
import { addDevice } from '../controllers/addDevice.ts';
import { addUser } from '../controllers/addUser.ts';
import { login } from '../controllers/login.ts';
import { addQualification } from '../controllers/addQualification.ts';
import { addQualificationToCategory } from '../controllers/addQualificationToCategory.ts';
import { getAllQualifications } from '../controllers/getAllQualifications.ts';
import { getAllDeviceCategories } from '../controllers/getAllDeviceCategories.ts';
import { getTaskByUserId } from '../controllers/getTaskByUserId.ts';
import { addDeviceCategory } from '../controllers/addDeviceCategory.ts';
import { addCategory } from '../controllers/addCategory.ts';
import { getAllCategories } from '../controllers/getCategories.ts';
import { deleteUserById } from '../controllers/deleteUserById.ts';
import { addQualificationToUser } from '../controllers/addQualificationToUser.ts';

const router = new Router();

router
    .post("/user", addUser)
    .post("/device", addDevice)
    .post("/login", login)
    .post("/qualification", addQualification)
    .post("/devicecategory", addDeviceCategory)
    .post("/category", addCategory)
    .post("/qualification-to-category", addQualificationToCategory)
    .post("/qualification-to-user", addQualificationToUser)

    .get("/devices", getAllDevice)
    .get("/users", getAllUsers)
    .get("/qualifications", getAllQualifications)
    .get("/devicecategories", getAllDeviceCategories)
    .get("/task", getTaskByUserId)
    .get("/categories", getAllCategories)

    .delete("/user", deleteUserById)
    
export default router;