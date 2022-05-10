import { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";
import mySqlClient from "../database/mysql.ts"
import { DeviceCategoryInterface } from '../models/DeviceCategoryInterface.ts';
import { MaintenanceInterface } from '../models/MaintenanceInterface.ts';

/* export const get_all_users = async ({ params, response }: { params: {id: number}; response: any }) => {
    const username = "bomate";
    const users = await mySqlClient.query(`select * from users`);

    if(users){
        response.body = users.;
    }

    console.log(users)
}

export const get_user = (ctx: Context) => {

} */

export async function search( params: number) { 
    const isSpecific = Object.keys(params).length !== 0;
    if (isSpecific) {
        return await mySqlClient.execute(`SELECT * FROM User`); //WHERE ID = ?`, [params]);
    } else {
        return await mySqlClient.execute(`SELECT * FROM User`);   
    }
}
const szaft = "";
export async function get_all_users() {
    return await mySqlClient.execute(`SELECT userId, username, qualification, type FROM User, Qualification 
                                     WHERE Qualification.qualificationId = User.qualificationId`);
}

export async function get_users_by_id(params: number) {
    return {
        userId: 0,
    }
}

export async function return_devices() { 
        return await mySqlClient.execute(`SELECT Device.deviceId, DeviceCategory.deviceCategoryName, Device.deviceName, Device.location 
        FROM Device, DeviceCategory
        WHERE Device.categoryId = DeviceCategory.deviceCategoryId`);   
}

export async function get_qualifications() { 
    return await mySqlClient.execute(`SELECT * FROM Qualification`);   
}

export async function get_all_categories() { 
    return await mySqlClient.execute(`SELECT * FROM Category`);   
}

export async function get_device_categories() { 
    return await mySqlClient.execute(`SELECT * FROM DeviceCategory`);   
}

export async function get_all_maintenances() { 
    return await mySqlClient.execute(`SELECT * FROM Maintenance`);   
}

export async function get_all_tasks() { 
    return await mySqlClient.execute(`SELECT Task.maintenanceId, User.userName, Qualification.qualification, Maintenance.type, Task.date, Maintenance.status, DeviceCategory.Description
    FROM Task, User, Qualification, Maintenance, DeviceCategory, Device
    WHERE User.userId = Task.userId AND
    Qualification.qualificationId = User.qualificationId AND
    Device.categoryId = DeviceCategory.deviceCategoryId AND
    DeviceCategory.deviceCategoryId = Device.DeviceId AND
    Task.maintenanceId = Maintenance.maintenanceId`);
}

export async function get_task_by_user_id(userid : number){
    return await mySqlClient.execute(`SELECT Task.maintenanceId, UserName, Qualification, Task.Type, Date, DeviceCategory.Description
                                      FROM Task, User, Qualification, DeviceCategory, Device
                                      WHERE User.UserId = Task.UserId AND 
                                      Qualification.QualificationId = User.QualificationId AND
                                      Device.categoryId = DeviceCategory.deviceCategoryId AND
                                      DeviceCategory.deviceCategoryId = Device.DeviceId AND
                                      User.UserId = ?`, [
        userid
    ]);
}


export async function get_all_periodic_tasks() {
    return await mySqlClient.execute(`SELECT * FROM Task WHERE Task.type = 'periodic'`);
}

export const insert_user = async ({ userName, password, qualificationId, type }: { userName: string; password: string, qualificationId: number, type: string }) => {
    return await mySqlClient.execute(`INSERT INTO User(UserName, Password, QualificationId, Type) VALUES(?,?,?,?)`, [
        userName, password, qualificationId, type
    ]);
}

export const insert_device = async ({ categoryId, deviceName, location }: {categoryId: number, deviceName: string, location: string }) => {
    return await mySqlClient.execute(`INSERT INTO Device(CategoryId, DeviceName, Location) VALUES(?,?,?)`, [
        categoryId, deviceName, location
    ]);
}

export const insert_qualification = async ({ qualification, qualificationDescription }: { qualification: string, qualificationDescription: string }) => {
    return await mySqlClient.execute(`INSERT INTO Qualification(Qualification, QualificationDescription) VALUES(?,?)`, [
        qualification, qualificationDescription
    ]);
}

export const update_qualification_in_device_category = async ({ qualificationId, deviceCategoryId }: { qualificationId: number, deviceCategoryId: number }) => {
    return await mySqlClient.execute(`UPDATE DeviceCategory SET QualificationId = ? WHERE DeviceCategoryId = ?`, [
        qualificationId, deviceCategoryId
    ]);
}

export const update_qualification_in_user = async ({ qualificationId, userId }: { qualificationId: number, userId: number }) => {
    return await mySqlClient.execute(`UPDATE User SET QualificationId = ? WHERE UserId = ?`, [
        qualificationId, userId
    ]);
}

export const update_maintenance = async ({ maintenanceId, maintenanceName, type, deadline, priority, status, ignoreMessage, deviceId }: MaintenanceInterface) => {
    return await mySqlClient.execute(`UPDATE Maintenance SET type = ?, deadline = ?, priority = ? , status = ?, ignoreMessage = ?, deviceId = ?, maintenanceName = ? WHERE maintenanceId = ?`, [
        type, deadline, priority, status, ignoreMessage, deviceId, maintenanceName, maintenanceId
    ]);
}

export const insert_category = async ({  mainCategoryId, subCategoryId }: { mainCategoryId: number, subCategoryId: number }) => {
    return await mySqlClient.execute(`INSERT INTO Category(mainCategoryId, subCategoryId) VALUES(?,?)`, [
        mainCategoryId, subCategoryId
    ]);
}

/* export const insert_sub_category = async ({  name, description, intervall, normtime }: {name: string, description: string, intervall: number, normtime: number }) => {
    return await mySqlClient.execute(`INSERT INTO USER(NAME, DESCRIPTION, INTERVALL, NORMTIME) VALUES(?,?,?,?)`, [
        name, description, intervall, normtime
    ]); 
} */

export const insert_devicecategory = async ({  deviceCategoryName, description, intervall, normtime }: {deviceCategoryName: string, description: string, intervall: string, normtime: string }) => {
    return await mySqlClient.execute(`INSERT INTO DeviceCategory(DeviceCategoryName, description, intervall, time) VALUES(?,?,?,?)`, [
        deviceCategoryName, description, intervall, normtime
    ]);
}

export const insert_maintenance = async ({ maintenanceName, type, deadline, priority, status, ignoreMessage, deviceId }: MaintenanceInterface) => {
    return await mySqlClient.execute(`INSERT INTO Maintenance(
        type, deadline, priority, status, ignoreMessage, deviceId, maintenanceName)
        VALUES(?,?,?,?,?,?,?)`, [
        type, deadline, priority, status, ignoreMessage, deviceId, maintenanceName
    ]);
}

export const insert_task = async ({  maintenanceId, userId, qualificationId, date, description, type }: {maintenanceId: number, userId: number, qualificationId: number, date: string, description : string, type : string }) => {
    return await mySqlClient.execute(`INSERT INTO Task(MaintenanceId, UserId, QualificationId, Date, Description, type ) VALUES(?,?,?,?,?, ?)`, [
        maintenanceId, userId, qualificationId, date, description, type
    ]);
}

export const delete_user_by_id = async ({ userId }: {userId : number }) => {
    return await mySqlClient.execute(`DELETE FROM User WHERE userId = ?`, [
        userId
    ]);
}

export const update_device_category = async ({ deviceCategoryId, deviceCategoryName, description, intervall, time, normtime }: DeviceCategoryInterface ) => {
    return await mySqlClient.execute(`UPDATE DeviceCategory SET deviceCategoryName = ?, description = ?, intervall = ?, time = ?, normtime = ? WHERE DeviceCategoryId = ?`, [
        deviceCategoryName, description, intervall, time, normtime, deviceCategoryId
    ]);
}

/* export const delete_user = async (ctx: Context) => {
    let result = await mySqlClient.execute(`delete from users where ?? = ?`, ["id", 1]);
    console.log(result)
} */


/* export async function insert({ name, country }: { name: string; country: string }) {
    return await client.execute(`INSERT INTO user(name, country) values(?,?)`, [
        name, country
    ]);
} */

/* INSERT INTO MAIN_CATEGORY (NAME, DESCRIPTION, INTERVALL, NORMTIME)
VALUES ('SECURITY_CAMERAS', 'These are the security cameras all around the building, these are responsible for the safety check of people!', 'EVERY HALF A YEAR!', 2:00); */

/* INSERT INTO MAIN_CATEGORY (NAME, DESCRIPTION, INTERVALL, NORMTIME)
VALUES ('FIRE ALARMS', 'These are the type of devices that are responsible for warning in case of a fire accident!', 'EVERY QUATER YEAR!', 1:30); */