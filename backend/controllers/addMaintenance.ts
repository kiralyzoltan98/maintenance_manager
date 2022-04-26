import mySqlClient from '../database/mysql.ts';
import { insert_maintenance } from './queryController.ts';
import { MaintenanceInterface } from '../models/MaintenanceInterface.ts';

export async function addMaintenance ({ request, response }: { request: any; response: any }) {
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

  

      status = 200;
      response.body = await insert_maintenance(maintenanceInfo);

      //response.body = { "error": "Invalid request!" };
    

    response.status = status;
}
