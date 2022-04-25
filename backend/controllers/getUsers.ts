import { get_all_users } from './queryController.ts';

export async function getUsers ({ response }: { response: any }) { 
  const result = await get_all_users();
  //const resp = {data: result.rows, total: 2};
  response.body = result.rows;
  console.log(result.rows);
}