import { get_qualifications } from './queryController.ts';

export async function getAllQualifications ({ response }: { response: any }) { 
    const result = await get_qualifications();
    response.body = result.rows;
  }
  