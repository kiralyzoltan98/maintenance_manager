import { search } from './queryController.ts';
import { UserInterface} from '../models/UserInterface.ts'

export async function login({ request, response }: { request: any; response: any }) {
    const body = await request.body().value;
    let status = 400;
    console.log(body);
    if (!request.hasBody) {
        response.status = status;
        response.body = { message: "No data provided" };
        return;
      }

    const userName = body.userName;
    const password = body.password;
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