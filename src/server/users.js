import { post } from "../utils/request";


// login
export function loginApi(username, password){
    return post('users/login',{username,password})
}

// register 
export function registerApi(username, password){
    return post('users/add',{username, password})
}