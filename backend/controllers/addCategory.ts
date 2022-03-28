import mySqlClient from '../database/mysql.ts';
import { insert_category } from './queryController.ts';
import { CategoryInterface } from '../models/CategoryInterface.ts'

export async function addCategory ({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;
    const categoryInfo: CategoryInterface = {
        mainCategoryId: body.mainCategoryId,
        subCategoryId: body.subCategoryId
    }

    if()

    let status = 400;
    const hasValues = (categoryInfo.mainCategoryId != 0 && categoryInfo.subCategoryId != 0)
    
    if (hasValues) {
      response.body = await insert_category(categoryInfo);
      status = 200;
    } else {
      response.body = { "error": "Invalid request!" };
    }
    response.status = status; 
}