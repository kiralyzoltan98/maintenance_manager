import { get_users_by_id } from './queryController.ts';

export async function getUsersById ({ response }: { response: any }) { 
  const result = await get_users_by_id(0);
  //const resp = {data: result.rows, total: 2};
  response.body = result;
  //console.log(result.rows);
}