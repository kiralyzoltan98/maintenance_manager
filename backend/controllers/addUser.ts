import mySqlClient from '../database/mysql.ts';
import { insert_user } from './queryController.ts';
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

    const hasValues = await (userInfo.userName.length != 0 && userInfo.password.length != 0 && userInfo.qualificationId.toString().length != 0 && userInfo.type.length != 0 );

    if (hasValues) {
      status = 200;
      response.body = await insert_user(userInfo);
    } else {
      response.body = { "error": "Invalid request!" };
    }

    response.status = status;
}
