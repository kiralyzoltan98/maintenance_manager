import mySqlClient from '../database/mysql.ts';

import { insert_category } from './queryController.ts';
import { CategoryInterface } from '../models/CategoryInterface.ts'
import { get_device_categories } from './queryController.ts';

export async function addCategory ({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;
 
    const categoryInfo: CategoryInterface = {
        mainCategoryId: body.mainCategoryId,
        subCategoryId: body.subCategoryId
    }
    console.log({ body })
    console.log(categoryInfo.mainCategoryId, categoryInfo.subCategoryId)

    const isDeviceCategoryExist = async ( deviceCategoryId : number ) =>{
      const categories = (await get_device_categories()).rows;
      let exists = false;
      categories?.forEach( category => {
        if(category.DeviceCategoryId === deviceCategoryId){
          exists = true;
        }
      })
      return exists;
    }

    const isMainCatExists = await isDeviceCategoryExist(categoryInfo.mainCategoryId);
    const isSubCatExists = await isDeviceCategoryExist(categoryInfo.subCategoryId);
    const isNotEqual = (categoryInfo.mainCategoryId !== categoryInfo.subCategoryId)
    let status = 400;

    console.log({isMainCatExists})
    console.log({isSubCatExists})
    console.log({isNotEqual})

    //const hasValues = (categoryInfo.mainCategoryId != 0 && categoryInfo.subCategoryId.toString().length != 0)
    
    if (!isMainCatExists && !isMainCatExists && isNotEqual) {
      response.body = await insert_category(categoryInfo);
      status = 200;
    } else if(isMainCatExists){
      response.body = { "error": "Main category does not exist!" };
    }else if(isSubCatExists){
      response.body = { "error": "Sub category does not exist!" };
    }else {
      response.body = { "error": "Invalid request!" };
    }
    response.status = status; 
}