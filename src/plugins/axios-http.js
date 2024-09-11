// import axios from 'axios';

// const useAxios = axios.create({
//     // baseURL: 'https://dummyjson.com',
//     baseURL: import.meta.env.VITE_BASE_URL,
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// });

// export default useAxios;

// plugins/axios-http.js
import axios from 'axios';
// import store from '@/store';
//set default value on axios
const useAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

useAxios.interceptors.request.use(config => {
        const token = JSON.parse(localStorage.getItem('user-info')) ? JSON.parse(localStorage.getItem('user-info')).data.token : false;
        console.log('TOKEN =>', `Bearer ${token}`);
        if (token) {
            config.headers.common["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    });

useAxios.interceptors.response.use(response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            // store.dispatch('logout');
            window.location.href = '/login'
            localStorage.removeItem('user-info');
            // console.log('token expired', error.response)
        }
        return Promise.reject(error);
    });

export default useAxios;