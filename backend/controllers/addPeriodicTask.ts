import { insert_task, get_all_maintenances, search, get_qualifications } from './queryController.ts';
import {cron, daily, monthly, weekly} from 'https://deno.land/x/deno_cron/cron.ts';

export async function addPeriodicTask ({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;

    const periodicTaskInfo = {
        taskId : body.taskId,
        periodtype: body.periodtype, //daily, weekly, monthly, yearly
        period: body.period // 5
    }

    let status = 400;
    const hasValues = (
        periodicTaskInfo.periodtype.length != 0 && 
        periodicTaskInfo.period.toString().length != 0
    )

    if (hasValues) {
        status = 200;
    
    }else {
        response.body = { "error": "Invalid request!" };
    }

    response.status = status;
}