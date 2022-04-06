import { get_qualifications, search, update_qualification_in_user } from './queryController.ts';


export async function addQualificationToUser({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;
    const qualificationInfo = {
      qualificationId: body.qualificationId,
      userId: body.userId
    }

    let status = 400;
    const hasValues = (qualificationInfo.qualificationId + "".length != 0 && qualificationInfo.userId+"".length != 0)

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

    const isUserExist = async ( deviceCategoryId : string ) =>{
      const users = (await search(1)).rows;
      let exists = false;
      users?.forEach( user => {
        if(user.UserId === parseInt(deviceCategoryId)){
          exists = true;
        }
      })
      return exists;
    }

    const userExist = await isUserExist(qualificationInfo.userId);

    const isQualifExist = await isQualificationExist(qualificationInfo.qualificationId);
    console.log(typeof qualificationInfo.qualificationId)
    console.log(typeof qualificationInfo.userId)
    console.log(hasValues, isQualifExist, userExist);
    
    if (hasValues && isQualifExist && userExist) {
      status = 200;
      const body = await update_qualification_in_user(qualificationInfo);
      response.body = body;
    }else if(isQualifExist){
      response.body = { "error": "Qualification does not exist!" };
    }else if(userExist){
      response.body = { "error": "User does not exist!" };
    }else {
      response.body = { "error": "Invalid request! "+qualificationInfo.qualificationId+" "+qualificationInfo.userId };
    }

    response.status = status;
}