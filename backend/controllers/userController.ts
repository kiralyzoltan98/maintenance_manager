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
        return await mySqlClient.execute(`SELECT * FROM USER WHERE ID = ?`, [params]);
    } else {
        return await mySqlClient.execute(`SELECT * FROM USER`);   
    }
}

export const insert_user = async ({ name, password, age, gender }: { name: string; password: string, age: number, gender: number }) => {
    return await mySqlClient.execute(`INSERT INTO USER(NAME, PASSWORD, AGE, GENDER) VALUES(?,?,?,?)`, [
        name, password, age, gender
    ]);
}

export const insert_device = async ({ category_id, name, location }: {category_id: number, name: string, location: string }) => {
    return await mySqlClient.execute(`INSERT INTO DEVICE(CATEGORY_ID, NAME, LOCATION) VALUES(?,?,?)`, [
        category_id, name, location
    ]);
}

export const insert_category = async ({  name, description, intervall, normtime }: {name: string, description: string, intervall: number, normtime: number }) => {
    return await mySqlClient.execute(`INSERT INTO USER(NAME, DESCRIPTION, INTERVALL, NORMTIME) VALUES(?,?,?,?)`, [
        name, description, intervall, normtime
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