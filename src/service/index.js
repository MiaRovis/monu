import axios from 'axios';

let Service = axios.create({
    baseUrl: 'http://localhost:3000/',
    timeout:1000,
});

let Auth = {
    async login (username, password) {
        Service.post("/auth", {
            username: username,
            password: password,
        });

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
};

export { Service, Auth };