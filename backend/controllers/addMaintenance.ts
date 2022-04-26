import mySqlClient from '../database/mysql.ts';
import { insert_maintenance } from './queryController.ts';
import { MaintenanceInterface } from '../models/MaintenanceInterface.ts';

export async function addUser ({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;
    let status = 400;

    const maintenanceInfo:MaintenanceInterface = {
      maintenanceName: body.userName,
      type: body.type,
      deadline: body.deadline,
      priority: body.priority,
      status: body.status,
      ignoreMessage: body.ignoreMessage,
      deviceId: body.deviceId
    }

    const hasValues = await (maintenanceInfo.maintenanceName.length != 0 && maintenanceInfo.type.length != 0 && maintenanceInfo.deadline.toString().length != 0 
                        && maintenanceInfo.priority.toString().length != 0 && maintenanceInfo.status.toString().length != 0 && maintenanceInfo.ignoreMessage.length != 0 
                        && maintenanceInfo.deviceId.toString().length != 0);

    if (hasValues) {
      status = 200;
      response.body = await insert_maintenance(maintenanceInfo);
    } else {
      response.body = { "error": "Invalid request!" };
    }

    response.status = status;
}
