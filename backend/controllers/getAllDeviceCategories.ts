import { get_device_categories } from './queryController.ts';

export async function getAllDeviceCategories ({ response }: { response: any }) { 
    const result = await get_device_categories();
    response.body = result.rows;
}