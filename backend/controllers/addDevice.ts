import mySqlClient from '../database/mysql.ts';
import { insert_device } from './userController.ts';
import { DeviceInterface } from '../models/DeviceInterface.ts';

export async function addDevice ({ request, response }: { request: any; response: any }) {
    const body = await request.body();
    const deviceInfo: DeviceInterface = await body.value;
    let status = 200;

    if (deviceInfo.hasOwnProperty('categoryId') && deviceInfo.hasOwnProperty('deviceName') && deviceInfo.hasOwnProperty('location')) {
      response.body = await insert_device(deviceInfo);
    } else {
      response.body = { "error": "Invalid request!" };
      status = 400;
    }

    response.status = status;
}