import axios from 'axios';

let Service = axios.create({
    baseUrl: 'http://localhost:3000/',
    timeout:1000,
});

Service.interceptors.response.use(
    (response) => {
        console.log('Interceptor', response);
        return response;
    },
    (error) => {
        if (error.response == 401) {
            console.error('Interceptor', error.response)
        }
    }
);

let Auth = {

    async signUp(userData) {
        let post = await Service.post('/users', userData);
        return post
    },

    async login (email, password) {
        let response = await Service.post("/auth", {
            email: email,
            password: password,
        });

        console.log(response)

        let user = Response.data

        localStorage.setItem("user", JSON.stringify(user));

        return true;
    },

    logout(){
        localStorage.removeItem("user");

    },

    getUser(){
       return JSON.parse(localStorage.getItem("user"));
     },

    getToken() {

        let user = Auth.getUser();

        if (user && user.token) {
            return user.token
        }
        else {
            return false;
        }
    },
    state: {

        get authenticated() {
            return Auth.authenticated();
        },

        get userEmail() {
            let user = Auth.getUser()
            if (user) {
                return user.email;
            }
        }
    }


};

export { Service, Auth };