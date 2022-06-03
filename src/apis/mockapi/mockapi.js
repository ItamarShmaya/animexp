import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const mockapi = axios.create({
  baseURL: `https://${API_KEY}.mockapi.io/`,
});

export default mockapi;
