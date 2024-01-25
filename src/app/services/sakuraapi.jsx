import axios from "axios"

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const sakuraapi = () => {

    const baseUrl = 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/'

    const getAll = async () => {
        const response = await axios.get(baseUrl);
        return response;
    }
    return {
        getAll
    }
}