import { MaintenanceInterface } from "../models/MaintenanceInterface.ts";
import { update_maintenance } from "./queryController.ts";

export async function updateMaintenances({ request, response }: { request: any; response: any }){
    const body = await request.body().value;
    let status = 400;

    
    const maintenanceInfo:MaintenanceInterface = {
        maintenanceId: body.maintenanceId,
        maintenanceName: body.maintenanceName,
        type: body.type,
        deadline: body.deadline,
        priority: body.priority,
        status: body.status,
        ignoreMessage: body.ignoreMessage,
        deviceId: body.deviceId
    }

    const hasParams = ( maintenanceInfo.maintenanceId && 
        maintenanceInfo.maintenanceName &&
        maintenanceInfo.type &&
        maintenanceInfo.deadline &&
        maintenanceInfo.priority &&
        maintenanceInfo.status &&
        maintenanceInfo.ignoreMessage &&
        maintenanceInfo.deviceId
    )

    if(hasParams){
        status = 200;
        response.body = await update_maintenance(maintenanceInfo);
    }else{
        response.body = {"error" : "Wrong or missing parameters!"}
    }
    
    response.status = status;

}