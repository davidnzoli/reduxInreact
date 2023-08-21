
let saveToken = (token)=>{
    localStorage.setItem("token", token)
}

let isLogged = ()=>{
    const token = localStorage.getItem("token");
    return !!token;
}

let logout = ()=>{
    localStorage.removeItem("token");
}

export const ServiceLogin = {
    saveToken, isLogged, logout
}
// export default {saveToken, isLogged, logout} = ServiceLogin;