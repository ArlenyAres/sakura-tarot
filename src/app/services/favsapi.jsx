import axios from "axios"

export const favsapi = () => {

    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Accept'] = 'application/json';

    const baseUrl = 'http://localhost:8000/users'

    const createFav = async (data) => {
        const response = await axios.post(baseUrl, data);
        return response;
    }
    return {
        createFav
    }
    }