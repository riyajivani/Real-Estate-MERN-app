import axios from "axios";

const apiRequest = axios.create({
     baseURL: "http://localhost:9000/api",
     withCredentials: true,
});

export default apiRequest;