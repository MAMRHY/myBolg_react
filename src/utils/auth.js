export function getToken(){
    return JSON.parse(localStorage.getItem('token'));
}

export function setToken(token){
    let str = JSON.stringify(token)
    return localStorage.setItem('token',str);
}


export function isLogin(){
    if(localStorage.getItem('token').name){
        return true
    }else{
        return false
    }
}