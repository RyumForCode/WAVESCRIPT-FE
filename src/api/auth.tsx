import axios from 'axios';

const baseURL = process.env.REACT_APP_BE_SERVER;


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
