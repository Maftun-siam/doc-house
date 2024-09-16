import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000', // Your backend base URL
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add any interceptors for authentication if necessary
// axiosSecure.interceptors.request.use...

export default axiosPublic;
