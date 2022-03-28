import { get_task_by_user_id } from './queryController.ts';

export async function getTaskByUserId ({ request,response }: { request : any, response: any }) { 
    const url = new URL(request.url);
    const userId = parseInt(url.searchParams.get('userid')?.toString()!);
    const result = await get_task_by_user_id(userId);
    response.body = result.rows;
  }