import { insert_task, get_all_maintenances, search, get_qualifications } from './queryController.ts';
import {everyMinute, daily, monthly, weekly, hourly, stop} from 'https://deno.land/x/deno_cron/cron.ts';

export async function addPeriodicTask ({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;

    const periodicTaskInfo = {
        periodtype: body.periodtype, // hourly, daily, weekly, monthly
        period: body.period // which day/month e.g: 2 = February
    }

    const taskInfo = {
        maintenanceId: body.maintenanceId,
        userId: body.userId,
        qualificationId: body.qualificationId,
        date: body.date,
        description: body.description
    }

    let status = 400;
    const hasValues = (
        periodicTaskInfo.periodtype.length != 0 && 
        periodicTaskInfo.period.toString().length != 0 &&
        taskInfo.maintenanceId.toString().length != 0 &&
        taskInfo.userId.toString().length != 0 && 
        taskInfo.qualificationId.toString().length != 0 &&
        taskInfo.date.length != 0
    )

    if (hasValues) {
        switch (periodicTaskInfo.periodtype){
            case "minute" : {
                everyMinute(async () => {
                    response.body = await insert_task(taskInfo);
                });
            }
            break;
            case "hourly" : {
                hourly(async () => {
                    response.body = await insert_task(taskInfo);
                });
            }
            break;
            case "daily" : {
                daily(async () => {
                    response.body = await insert_task(taskInfo);
                });
            }
            break;
            case "weekly" : {
                weekly(async () => {
                    response.body = await insert_task(taskInfo);
                },periodicTaskInfo.period);
            }
            break;
            case "monthly" :{
                monthly(async () => {
                    response.body = await insert_task(taskInfo);
                },periodicTaskInfo.period);

            }
            break;
            default : {
                response.body = {"error" : "Wrong period type, try hourly/daily/weekly/monthly."}
            }
            break;
        }
        status = 200;
        
    }else {
        response.body = { "error": "Invalid request!" };
    }

    response.status = status;
}