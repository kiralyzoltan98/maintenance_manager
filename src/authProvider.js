
import { fetchUtils, Admin, Resource } from 'react-admin';
const httpClient = fetchUtils.fetchJson;

export default {
    //Called when the user tries to log in
    login: ({username, password}) => {
        const url = "http://localhost:8000/login";
        let qualification;

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ userName: username, password: password })
        };

        /*let response;

        httpClient(url, requestOptions)
            .then(response => response.json())
            .then(data => localStorage.setItem('username', response.username, 'qualification', response.qualification))*/

        async function checkLogin() {
            const request = await httpClient(url, requestOptions);
            const data = await request.body;
            return data;
        }

        const response = checkLogin().then;
        console.log(response);

        localStorage.setItem('username', response.username, 'qualification', response.qualification);
        
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