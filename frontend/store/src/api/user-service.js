import axios from "axios";
import {Base_Url} from "../config"

export const UserService = {
    signup: (creds)=>{
        const URL = Base_Url + "/user" +"/signup";
        return axios.post(URL, creds);
    },
    signin: (creds=>{
        const URL = Base_Url + "/user" +"/login";
        return axios.post(URL, creds);
    })
}