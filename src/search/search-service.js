import axios from 'axios';

export const findTeams = async (link) => {
    const response = await axios.get(link);
    const data = response.data.teams;
    return data;
}