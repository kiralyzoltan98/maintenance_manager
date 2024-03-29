import { insert_task, get_all_maintenances, search, get_qualifications } from './queryController.ts';
import {everyMinute, daily, monthly, weekly, hourly, stop} from 'https://deno.land/x/deno_cron/cron.ts';

export async function addTask ({ request, response }: { request: any; response: any }) {
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

    let status = 400;
    const hasValues = (
        taskInfo.maintenanceId.toString().length != 0 &&
        taskInfo.userId.toString().length != 0 && 
        taskInfo.qualificationId.toString().length != 0 &&
        taskInfo.date.length != 0        
        )
    
    const isMaintenanceIdExist = async (maintenanceId : string) =>{
        const maintencances = (await get_all_maintenances()).rows;
        let exists = false;
        maintencances?.forEach( maintenance => {
          if(maintenance.maintenanceId === parseInt(maintenanceId)){

            exists = true;
          }
        })
        return exists;
    }

    const isUserIdExist = async (userId : string) =>{
      const users = (await search(1)).rows;
      let exists = false;
      users?.forEach( (user) => {
        if(user.userId, parseInt(userId)){
          exists = true;
        }
      })
      return exists;
    }

    const isQualificationExist = async (qualificationId : string) =>{
      const users = (await get_qualifications()).rows;
      let exists = false;
      users?.forEach( (qualification) => {
        if(qualification.qualificationId === parseInt(qualificationId)){
          exists = true;
        }
      })
      return exists;
    }
    //NO VALUES YET
    //const isMaintenanceIdExistHandle = await isMaintenanceIdExist(taskInfo.maintenanceId);
    
    const isUserIdExistHandle = await isUserIdExist(taskInfo.userId);
    const isQualificationExistHandle = await isQualificationExist(taskInfo.qualificationId);

    if (hasValues && /*isMaintenanceIdExistHandle &&*/ isUserIdExistHandle && isQualificationExistHandle) {
      response.body = await insert_task(taskInfo);
      status = 200;
    }else  if(typeof periodicTaskInfo.period 
      !== 'undefined' && typeof periodicTaskInfo.periodtype !== 'undefined'){
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
      
    }
    /*else if(!isMaintenanceIdExistHandle){
      response.body = { "error": "MaintenanceId does not exists!" };
    }*/else if(!isUserIdExistHandle){
      response.body = { "error": "UserId does not exists!" };
    }else if(!isQualificationExistHandle){
      response.body = { "error": "QualificationId does not exists!" };
    }else {
      response.body = { "error": "Invalid request!" };
    }

    response.status = status;
}