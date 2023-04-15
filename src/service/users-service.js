import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const USERS_API = `${API_BASE}/tuits`;

export const createUser = async (user) => {
    const response = await axios.post(USERS_API, user)
    return response.data;
}
export const findUsers = async () => {
    const response = await axios.get(USERS_API);
    const users = response.data;
    return users;
}
export const deleteUser = async (uid) => {
    const response = await axios
    .delete(`${USERS_API}/${uid}`)
    return response.data
}
export const updateUser = async (user) => {
    await axios
        .put(`${USERS_API}/${user._id}`, user);
    return user;
}
  