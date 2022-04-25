import { DeviceCategoryInterface } from '../models/DeviceCategoryInterface.ts';
import { update_device_category } from './queryController.ts';

export async function updateDeviceCategories({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;
    const deviceCategoryInfo: DeviceCategoryInterface = {
        deviceCategoryId: parseInt(body.get('deviceCategoryId')), // body.deviceCategoryId,
        deviceCategoryName: body.get('deviceCategoryName'), //body.deviceCategoryName,
        description: body.get('description'), // body.description,
        intervall: body.get('intervall'), //body.intervall,
        time: body.get('time'), //body.time,
        normtime: body.get('normtime') //body.normtime
    }

    let status = 400;
    const hasValues = (deviceCategoryInfo.deviceCategoryName.length != 0 && deviceCategoryInfo.description.length != 0 && deviceCategoryInfo.intervall.length != 0 && deviceCategoryInfo.normtime.length != 0) 
    
    if (hasValues) {
      status = 200;
      response.body = await update_device_category(deviceCategoryInfo);
    } else {
      response.body = { "error": "Invalid request!" };
    }
    response.status = status; 
}