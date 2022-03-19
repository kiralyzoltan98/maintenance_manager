import mySqlClient from '../database/mysql.ts';
import { insert_user } from './userController.ts';
import { UserInterface } from '../models/UserInterface.ts';

export async function addUser ({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;
    let status = 400;

    const userInfo:UserInterface = {
      userName: body.get('userName'),
      password: body.get('password'),
      qualificationId: body.get('qualificationId'),
      type: body.get('type')
    }

    if (userInfo.hasOwnProperty('userName') && userInfo.hasOwnProperty('password') && userInfo.hasOwnProperty('qualificationId') && userInfo.hasOwnProperty('type')) {
      status = 200;
      response.body = await insert_user(userInfo);
    } else {
      response.body = { "error": "Invalid request!" };
    }

    response.status = status;
}
