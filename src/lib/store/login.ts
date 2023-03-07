import {writable} from 'svelte/store';
import axios from "axios";

export interface IUser {
  email: string;
  password: string;
}

interface IAuth {
  token: string | null;
  error: object | null;
  isLoading: boolean;
  user: null;
}

const initialAuth: IAuth = {
  token: null,
  error: null,
  user: null,
  isLoading: false,
}

const CreateLoginStore = () => {
  const {subscribe, update, set} = writable({...initialAuth});
  const login = async (user: IUser) => {
    update((state) => ({...state, isLoading: true}));
    try {
      const res = await axios.post<{ token: string }>('/login', user);
      update((state) => ({
        ...state,
        token: res.data.token,
        error: null,
        isLoading: false,
      }));
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (err: any) {
      update((state) => ({
        ...state,
        token: null,
        error: err.response.data.message,
        isLoading: false,
      }));
    }
  };
  const logout = () => {
    set(initialAuth);
    axios.post('/logout');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const init = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      update((state) => ({
        ...state,
        token,
        user: JSON.parse(user),
      }));
    }
  };
  return {
    subscribe,
    login,
    logout,
    init,
  };
};
export const authStore = CreateLoginStore();