import mySqlClient from '../database/mysql.ts';
import { insert_qualification } from './queryController.ts';
import { QualificationInterface } from '../models/QualificationInterface.ts'

export async function addDevice ({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;
    const qualificationInfo: QualificationInterface = {
        qualificationId : body.get('qualificationId'),
        qualification: body.get('qualification'),
        qualificationDescription: body.get('qualificationDescription')
    }

    let status = 400;
    const hasValues = (qualificationInfo.qualificationId.toString().length != 0 && qualificationInfo.qualification.length != 0 && qualificationInfo.qualificationDescription.length != 0)
    
    if (hasValues) {
      response.body = await insert_qualification(qualificationInfo);
      status = 200;
    } else {
      response.body = { "error": "Invalid request!" };
    }

    response.status = status;
}