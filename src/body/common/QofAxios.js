import axios from "axios";
import { getToken } from "body/common/jwt";

const token = getToken();
const setHeaderToken = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
}
const qofAxios = {

    get : async(url) => {
        setHeaderToken();
        return await axios.get(url);
    },
    post: async(url) => {
        setHeaderToken();
        return await axios.post(url);
    },
    put : async(url)=>{
        setHeaderToken();
        return await axios.put(url);
    },
    delete : async(url) =>{
        setHeaderToken();
        return await axios.delete(url);
    }
}

export default qofAxios;