import  axios from 'axios';

const getUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/';
    const result = await axios.get(url);
    return result.data;
}

const getUserById = async userId => {
    const url = 'https://jsonplaceholder.typicode.com/users/';
    const result = await axios.get(`${url}${userId}`);
    return result.data;
}

export {getUsers, getUserById};