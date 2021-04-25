
import axios from "axios";
import { api } from "../urlConfig";


const axiosIntance = axios.create({
    baseUrl: api
})

export default axiosIntance;