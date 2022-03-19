export interface MaintenanceInterface{
    maintenanceId: number,
    type: string,
    deadline: string,
    prioriry: number,
    status: string,
    ignoreMessage: string,
    deviceId: number
}