import { search } from './userController.ts';

export async function login({ request, response }: { request: any; response: any }) {
    const body = await request.body();
    console.log({ body });
    let status = 400;

    const getUsers = await search(1);
    const users = getUsers.rows;
    


    const userName = body.get('userName');
    const password = body.get('password');
  
    console.log({userName, password})

    //GET THE PARAMS :(
    //COMPARE username and password


    status = 200;
    response.status = status;
}