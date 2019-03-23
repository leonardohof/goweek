import axios from 'axios';

// localhost address sdkmanager: 10.0.2.2:PORT
// localhost address genymotion: 10.0.3.2:PORT

const api = axios.create({
    baseURL: 'http://10.0.2.2:3000',
})

export default api;