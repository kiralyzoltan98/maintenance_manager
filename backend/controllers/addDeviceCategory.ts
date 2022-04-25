import mySqlClient from '../database/mysql.ts';
import { insert_devicecategory } from './queryController.ts';
import { DeviceCategoryInterface } from '../models/DeviceCategoryInterface.ts'

export async function addDeviceCategory ({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;
    const deviceCategoryInfo: DeviceCategoryInterface = {
        deviceCategoryName: body.deviceCategoryName,
        description: body.description,
        intervall: body.intervall,
        time: body.time,
        normtime: body.normtime
    }

    let status = 400;
    const hasValues = (deviceCategoryInfo.deviceCategoryName.length != 0 && deviceCategoryInfo.description.length != 0 && deviceCategoryInfo.intervall.length != 0 && deviceCategoryInfo.normtime.length != 0) 
    
    if (hasValues) {
      response.body = await insert_devicecategory(deviceCategoryInfo);
      status = 200;
    } else {
      response.body = { "error": "Invalid request!" };
    }
    response.status = status; 
}