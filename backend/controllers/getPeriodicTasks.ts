import { get_all_periodic_tasks } from './queryController.ts';

export async function getPeriodicTasks ({ response }: { response: any }) { 
    const result = await get_all_periodic_tasks();
    response.body = result.rows;
}