
import { fetchUtils, Admin, Resource } from 'react-admin';
const httpClient = fetchUtils.fetchJson;

export default {
    //Called when the user tries to log in
    login: async ({username, password}) => {
        const url = "http://localhost:8000/login";

        async function checkLogin() {
            const requestOptions = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type' : 'application/json',
            },
                body: JSON.stringify({userName: username, password: password})
            };
            const request = await fetch(url, requestOptions);
            const data = request.json();
            return data;
        }

        const response = await checkLogin().then();
        console.log(response.loggedInUser);
        const user = response.loggedInUser;

        localStorage.setItem('username', user.UserName, 'qualification', user.QualificationId);

        //Accept all username/password combination
        return Promise.resolve();
    },
    //Called when the user clicks the logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    //Called when an API returns an error
    checkError: ({status}) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    //Called when a user navigates to a new location to check for auth
    checkAuth: () => {
        return localStorage.getItem('username')
        ? Promise.resolve()
        : Promise.reject();
    },
    //Called when a user navigates to a new location to check for permission/role
    getPermissions: () => Promise.resolve(),
};