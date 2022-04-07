import { get_all_maintenances } from './queryController.ts';

export async function getAllMaintenances ({ response }: { response: any }) { 
    const result = await get_all_maintenances();
    response.body = result.rows;
}