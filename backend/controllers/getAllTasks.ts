import { get_all_tasks } from './queryController.ts';

export async function getAllTasks ({ response }: { response: any }) { 
  const result = await get_all_tasks();
  //const resp = {data: result.rows, total: 2};
  response.body = result.rows;
  console.log(result.rows);
}