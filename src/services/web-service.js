import axios from "axios";
import {DIST_URL, LOCAL_URL} from "../ressources/utils/const-utils";

export const ws = axios.create({
    baseURL: SWITCH_API_URL()
})

export default ws

function SWITCH_API_URL() {
    return window.location.hostname === 'localhost' ? LOCAL_URL : DIST_URL

}


export const GET = async (url) => {
    return await ws.get(url)
        .then(res => {
            if (res.data.error) console.log(res.data)
            return res.data
        })
        .catch(err => console.log(err))
}

export const POST = (url, data) => {
    return ws.post(url, data)
        .then(res => {
            if (res.data.error) console.log(res.data)
            return res.data
        })
        .catch(err => console.log(err))
}
