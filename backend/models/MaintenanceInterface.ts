export interface MaintenanceInterface{
    maintenanceId?: number,
    maintenanceName: string,
    type: string,
    deadline: string,
    priority: number,
    status: string,
    ignoreMessage: string,
    deviceId: number
}