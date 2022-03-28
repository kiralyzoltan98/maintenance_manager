import { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";
import mySqlClient from "../database/mysql.ts"

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

export async function return_devices() { 
        return await mySqlClient.execute(`SELECT * FROM Device`);   
}

export async function get_qualifications() { 
    return await mySqlClient.execute(`SELECT * FROM Qualification`);   
}

export async function get_device_categories() { 
    return await mySqlClient.execute(`SELECT * FROM DeviceCategory`);   
}

export async function get_task_by_user_id(userid : number){
    return await mySqlClient.execute(`SELECT * FROM Task WHERE UserId = ?`, [
        userid
    ]);
}

//TODO
//Table names to lowercase!!!
export const insert_user = async ({ userName, password, qualificationId, type }: { userName: string; password: string, qualificationId: number, type: string }) => {
    return await mySqlClient.execute(`INSERT INTO User(UserName, Password, QualificationId, Type) VALUES(?,?,?,?)`, [
        userName, password, qualificationId, type
    ]);
}

export const insert_device = async ({ deviceName, location }: { deviceName: string, location: string }) => {
    return await mySqlClient.execute(`INSERT INTO Device(DeviceName, Location) VALUES(?,?)`, [
        deviceName, location
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
    return await mySqlClient.execute(`INSERT INTO DeviceCategory(NAME, DESCRIPTION, INTERVALL, NORMTIME) VALUES(?,?,?,?)`, [
        deviceCategoryName, description, intervall, normtime
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