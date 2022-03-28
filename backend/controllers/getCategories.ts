import { get_all_categories } from './queryController.ts';

export async function getAllCategories ({ response }: { response: any }) { 
    const result = await get_all_categories();
    response.body = result.rows;
}