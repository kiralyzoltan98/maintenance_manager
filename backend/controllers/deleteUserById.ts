import { delete_user_by_id } from './queryController.ts';

export async function deleteUserById({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;
    const deleteInfo = {
      userId: body.userId
    }

    let status = 400;
    const hasValues = deleteInfo?.userId.toString().length != 0;

    if (hasValues) {
      status = 200;
      const body = await delete_user_by_id(deleteInfo);
      response.body = body;
    } else {
      response.body = { "error": "Invalid request!" };
    }

    response.status = status;
}