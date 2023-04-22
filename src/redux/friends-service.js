import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const FRIENDS_REST_API_URL = `${API_BASE}/friends`;
const api = axios.create({
  withCredentials: true,
});


export const getUserFriends = async (userId) => {
    const response = await api.get(`${FRIENDS_REST_API_URL}/followed/${userId}`);
    return response.data;
  };

export const getUserFollowers = async (userId) => {
    const response = await api.get(`${FRIENDS_REST_API_URL}/followers/${userId}`);
    return response.data;
};
export const createFriend = async (friends) => {
    const response = await api.post(`${FRIENDS_REST_API_URL}`, friends);
    return response.data; 
}