import axios from 'axios';

const baseURL = 'http://54.180.96.111:3000';


const register = async ({ id , password }:{ id: string , password:string }) => {
    const response = await axios.post(`${baseURL}/user`, {id, password});
    console.log(response);
    return response;
}


const login = async({ id, password } : { id:string, password:string }) => {
    const response = await axios.post(`${baseURL}/login`, {id, password});
    console.log(response);
    return response;
}

export { register , login };