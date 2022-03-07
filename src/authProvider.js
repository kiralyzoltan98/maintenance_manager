
export default {
    //Called when the user tries to log in
    login: ({username}) => {
        localStorage.setItem('username', username);
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