import { QualificationInterface } from '../models/QualificationInterface.ts'

import { get_qualifications, get_device_categories, update_qualification_in_device_category } from './queryController.ts';


export async function addQualificationToCategory({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;
    const qualificationInfo = {
      qualificationId: body.qualificationId,
      deviceCategoryId: body.deviceCategoryId
    }

    let status = 400;
    const hasValues = (qualificationInfo.qualificationId.toString().length != 0 && qualificationInfo.deviceCategoryId.toString().length != 0)

    const isQualificationExist = async ( qualificationId : string ) =>{
      const qualifications = (await get_qualifications()).rows;
      let exists = false;
      qualifications?.forEach( qualification => {
        if(qualification.QualificationId === parseInt(qualificationId)){
          exists = true;
        }
      })
      return exists;
    }

    const isDeviceCategoryExist = async ( deviceCategoryId : string ) =>{
      const qualifications = (await get_device_categories()).rows;
      let exists = false;
      qualifications?.forEach( qualification => {
        if(qualification.DeviceCategoryId === parseInt(deviceCategoryId)){
          exists = true;
        }
      })
      return exists;
    }

    const isDevCategoryExists = await isDeviceCategoryExist(qualificationInfo.deviceCategoryId);

    const isCatExists = await isQualificationExist(qualificationInfo.qualificationId);
    
    if (hasValues && isCatExists && isDevCategoryExists) {
      status = 200;
      const body = await update_qualification_in_device_category(qualificationInfo);
      response.body = body;
    }else if(isCatExists){
      response.body = { "error": "Qualification does not exist!" };
    }else if(isDevCategoryExists){
      response.body = { "error": "Device Category does not exist!" };
    } else {
      response.body = { "error": "Invalid request!" };
    }

    response.status = status;
}