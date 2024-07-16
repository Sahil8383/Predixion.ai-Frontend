import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://web-production-5626.up.railway.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;
