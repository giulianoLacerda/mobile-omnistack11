import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.9:3333',
    timeout: 5000
});

//console.log(api);


export default api;