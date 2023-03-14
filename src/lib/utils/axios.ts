import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string, // mettre ici l'url de base
});

export default instance;