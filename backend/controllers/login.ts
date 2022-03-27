import { search } from './queryController.ts';
import { UserInterface} from '../models/UserInterface.ts'

export async function login({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;
    let status = 400;

    const userName = body.userName;
    const password = body.userName;
    
    console.log({body});
    const getUsers = await search(1);
    let users = getUsers.rows;

    let isCorrectLogin = false;
    let loggedInUser;
    users?.forEach(user => {
        if(user.UserName === userName && user.Password === password){
            isCorrectLogin = true;
            loggedInUser = user;
        }
    });

    if(isCorrectLogin){
        status = 200;
        response.body = {loggedInUser}
    }else{
        response.body = { "error " : "Invalid username or password!"}
    }
    
    response.status = status;
}