import axios from 'axios';

function api(token?:string) {
  return axios.create({
    baseURL: import.meta.env.VITE_BASE_URL as string,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export default api;
