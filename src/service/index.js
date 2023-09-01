import axios from 'axios';

let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
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
        let post = await Service.post('/user', userData);
        return post;
    },

    async login(email, password) {
        try {
            let response = await Service.post('/login', {
                email: email,
                password: password,
            });
    
            console.log(response);
    
            if (response && response.data) {
                let user = response.data;
                localStorage.setItem("user", JSON.stringify(user));
                return true;
            } else { 
                console.error("Invalid response or missing data property in API response.");
                return false;
            }
        } catch (error) {
            console.error("Error during login:", error);
            return false;
        }
    },
    

    logout(){
        localStorage.removeItem("user");
        

    },

    getUser() {
        return JSON.parse(localStorage.getItem("user"));
      },
      

    getToken() {

        let user = Auth.getUser();

        if (user && user.token) {
            return user.token;
        }
        else {
            return false;
        }
    },
    state: {

        get authenticated() {
            return Auth.getToken() !==false;
        },
        
        get userEmail() {
            let user = Auth.getUser();
            if (user) {
                return user.email;
            }
        },
    },


};

export { Service, Auth };