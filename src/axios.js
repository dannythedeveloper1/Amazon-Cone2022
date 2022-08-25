import axios from 'axios';
const instance = axios.create({
    baseURL: "https://us-central1-fir-437f4.cloudfunctions.net/api",
});
export default instance;

// http://localhost:5001/fir-437f4/us-central1/api