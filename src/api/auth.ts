import axios from 'axios';
import instance from './instance/instance';

const baseURL = process.env.REACT_APP_BE_SERVER;

const register = async ({ id , password }:{ id: string , password:string }) => {
    const response = await instance.post(`${baseURL}/user`, {id, password});
    console.log(response);
    return response;
}

const login = async({ id, password } : { id:string, password:string }) => {
    const response = await instance.post(`/login`, {id, password});
    console.log(response);
    return response;
}

export { register , login };

//instance