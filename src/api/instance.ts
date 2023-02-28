import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const instance = axios.create({
    baseURL : process.env.REACT_APP_BE_SERVER,
    withCredentials : true,
    headers : {Authorization : cookies.get('authorization')}
});

export default instance;
