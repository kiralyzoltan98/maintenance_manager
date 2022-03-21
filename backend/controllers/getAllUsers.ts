import mySqlClient from '../database/mysql.ts';
import { search } from './userController.ts';

export async function getAllUsers ({ response }: { response: any }) { 
  let uid = 3;
  const result = await search(uid);
  //const resp = {data: result.rows, total: 2};
  response.body = result.rows;
}
