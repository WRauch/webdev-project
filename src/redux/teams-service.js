import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const TEAMS_REST_API_URL = `${API_BASE}/teams`;
const api = axios.create({
  withCredentials: true,
});

export const followTeam = async (team) => {
  const response = await api.post(`${TEAMS_REST_API_URL}/${team.teamId}/follows`, team);
  return response.data;
};

export const getTeamFollowers = async (teamId) => {
  const response = await api.get(`${TEAMS_REST_API_URL}/${teamId}/follows`);
  return response.data;
};

export const findTeam = async (teamId) => {
  const response = await api.get(`${TEAMS_REST_API_URL}/${teamId}`);
  return response.data;
}
