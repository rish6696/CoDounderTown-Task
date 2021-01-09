import axios from 'axios'
import { apiServerBaseUrl } from './config'


export const axiosInstance = axios.create({
    baseURL: apiServerBaseUrl,
    timeout: 1000,
    headers:{
        'Content-Type':'application/json'
    }
});

