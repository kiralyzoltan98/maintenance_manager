import { get_task_by_user_id } from './queryController.ts';

export async function getTaskByUserId ({ params,response }: { params : {userId : string}, response: any }) { 
    const id = parseInt(params.userId);
    const result = await get_task_by_user_id(id);
    response.body = result.rows;
  }