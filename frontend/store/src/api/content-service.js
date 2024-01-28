import axios from "axios";
import { Base_Url } from "../config"
const token = localStorage.getItem("token");

export const ContentService = {
    createContent: (payload) => {
        const URL = Base_Url + "/content" + "/create";
        return axios.post(URL, payload, {
            headers: {
                Authorization: `${token}`,
            },
        });
    },
    uploadContent: (payload) => {
        const URL = Base_Url + "/content" + "/upload";
        return axios.post(URL, payload, {
            headers: {
                Authorization: `${token}`,
            },
        })
    },
    signin: (creds => {
        const URL = Base_Url + "/user" + "/login";
        return axios.post(URL, creds);
    }),
}