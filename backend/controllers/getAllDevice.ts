import mySqlClient from '../database/mysql.ts';
import { return_devices } from './queryController.ts';

export async function getAllDevice ({ response }: { response: any }) { 
  const result = await return_devices();
  //const resp = {data: result.rows, total: 2};
  response.body = result.rows;
  console.log(result.rows);
}