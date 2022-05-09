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
        description: body.description,
        type: body.period ? "periodic" : "normal",
    }
    

/*
//FOR TESTING ONLY
    const periodicTaskInfo = {
        periodtype: body.get('periodtype'), // hourly, daily, weekly, monthly
        period: body.get('period') // which day/month e.g: 2 = February
    }

    const taskInfo = {
        maintenanceId: body.get('maintenanceId'),
        userId: body.get('userId'),
        qualificationId: body.get('qualificationId'),
        date: body.get('date'),
        description: body.get('description')
    }
    */
    let status = 400;

    const hasValues = (
        periodicTaskInfo.periodtype && 
        periodicTaskInfo.period &&
        taskInfo.maintenanceId &&
        taskInfo.userId && 
        taskInfo.qualificationId &&
        taskInfo.date
    )

    if (hasValues) {
        switch (periodicTaskInfo.periodtype){
            case "minute" : {
                everyMinute(async () => {
                    insert_task(taskInfo);                    
                });
                response.body = "Cron has successfully created";
            }
            break;
            case "hourly" : {
                hourly(async () => {
                    insert_task(taskInfo);
                });
                response.body = "Cron has successfully created";
            }
            break;
            case "daily" : {
                daily(async () => {
                    insert_task(taskInfo);
                });
                response.body = "Cron has successfully created";
            }
            break;
            case "weekly" : {
                weekly(async () => {
                    insert_task(taskInfo);
                },periodicTaskInfo.period);
                response.body = "Cron has successfully created";
            }
            break;
            case "monthly" :{
                monthly(async () => {
                    insert_task(taskInfo);
                },periodicTaskInfo.period);
                response.body = "Cron has successfully created";
            }
            break;
            default : {
                response.body = {"error" : "Wrong period type, try hourly/daily/weekly/monthly."}
            }
            break;
        }
        status = 200;
        
    }else {
        //stop(); //Stop all the scheduled job
        response.body = { "error": "Invalid request!" };
    }
    
    response.status = status;
}