import { writable } from 'svelte/store';
import axios from '$lib/utils/axios'

export interface IUser {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
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
  const { subscribe, update, set } = writable({ ...initialAuth });

  const login = async (user: IUser) => {
    update((state) => ({ ...state, isLoading: true }));
    try {
      const res = await axios.post<{ access_token: string, userResponse: object }>('/login', user);
      update((state) => ({
        ...state,
        token: res.data.access_token,
        error: null,
        isLoading: false,
      }));
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
  };
  const register = async (user: IUser | FormDataEvent) => {
    update((state) => ({ ...state, isLoading: true }));
    try {
      const res = await axios.post<{ access_token: string, userResponse: object }>('/register', user);
      update((state) => ({
        ...state,
        token: res.data.access_token,
        error: null,
        isLoading: false,
      }));
      return res
    } catch (err: any) {
      update((state) => ({
        ...state,
        token: null,
        error: err.response.data.errors,
        isLoading: false,
      }));
      return err.response.data.message;
    }
  };
  return {
    subscribe,
    login,
    logout,
    register,
    update
  };
};
export const authStore = CreateLoginStore();