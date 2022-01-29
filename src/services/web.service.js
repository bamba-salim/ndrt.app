import axios from "axios";
import {sessionUser} from "./Routing/auth.service";

export const ws = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {'session_user': sessionUser, 'content-type': 'multipart/form-data'}

})


export default ws

export const GET = async (url) => {
    return await ws.get(url)
        .then(res => {
            if (res.data.error) console.log(res.data)
            return res.data
        })
        .catch(err => console.log(err))
}

export const POST = (url, data) => {
    return ws.post(url, {data})
        .then(res => {
            if (res.data.error) console.log(res.data)
            return res.data
        })
        .catch(err => console.log(err))
}


