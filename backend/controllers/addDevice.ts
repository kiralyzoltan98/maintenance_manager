import mySqlClient from '../database/mysql.ts';
import { insert_device } from './queryController.ts';
import { DeviceInterface } from '../models/DeviceInterface.ts';

export async function addDevice ({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;

    const deviceInfo: DeviceInterface = {
      deviceId: body.get('categoryId'),
      deviceName: body.get('deviceName'),
      location: body.get('location')
    }

    let status = 400;
    const hasValues = (deviceInfo.categoryId.toString().length != 0 && deviceInfo.deviceName.length != 0 && deviceInfo.location.length != 0)
    
    if (hasValues) {
      response.body = await insert_device(deviceInfo);
      status = 200;
    } else {
      response.body = { "error": "Invalid request!" };
    }

    response.status = status;
}