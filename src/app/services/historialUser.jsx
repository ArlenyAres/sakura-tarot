import axios from "axios"

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

const baseUrl = 'http://localhost:8000/readings'
export async function getAll() {
    const response = await axios.get(baseUrl);
    return response.data;
}
export async function createUser(user) {
    try {
        const response = await axios.post(`${baseUrl}`, user)
        return response.data;

    } catch (error) {
        console.error(error)

    }

}