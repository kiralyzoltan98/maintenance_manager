import mySqlClient from '../database/mysql.ts';
import { search } from './userController.ts';

export async function getAllUsers ({ response }: { response: any }) { 
  let uid = 3;
  const result = await search(uid);
  response.body = result.rows;
}
