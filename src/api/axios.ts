import axios from 'axios';

const baseURL = 'localhost:8080';

const instance = axios.create({baseURL});

export default instance;