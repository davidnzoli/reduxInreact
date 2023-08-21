import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { ServiceLogin } from "../services/Service.login";
// import ServiceLogin from "../services/Service.login";

// const initialState= {
//     email:"davizolin93@gmail.com",
//     password:"DEV'S7@!"
// }

const creationSlice = createSlice({
    name: "user",
    initialState:{
        email:"davizolin93@gmail.com",
        // password:"DEV'S7@!"
    },
    reducers: {
        // onchange:(state, action)=>{
        //       action.payload:action.payload,
        // },
        onsubmit:(state, action)=>{
            axios.post("http://127.0.0.1:3333/api/v1/user/login", state)
            .then(resp => {
                console.log(resp);
                ServiceLogin.saveToken(resp.data.token)
                
                // ServiceLogin.saveToken(resp.data.token)
            })
            .catch(error => console.log(error))
        }
    }
})
export default  creationSlice;
