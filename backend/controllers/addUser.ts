import mySqlClient from '../database/mysql.ts';
import { insert_user } from './userController.ts';
import { UserInterface } from '../models/UserInterface.ts';

export async function addUser ({ request, response }: { request: any; response: any }) {
    const body = await request.body();
    const userInfo: UserInterface = body.value;
    let status = 200;

    if (userInfo.hasOwnProperty('name') && userInfo.hasOwnProperty('password') && userInfo.hasOwnProperty('age') && userInfo.hasOwnProperty('gender')) {
      response.body = await insert_user(userInfo);
    } else {
      response.body = { "error": "Invalid request!" };
      status = 400;
    }

    response.status = status;
}
