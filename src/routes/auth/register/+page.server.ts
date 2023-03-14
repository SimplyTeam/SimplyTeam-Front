
import { authStore, type IUser } from '$lib/store/login';
import axios from '$lib/utils/axios';
export function load({cookies}:any) {
  const token = cookies.get('token');
  const user = cookies.get('user');
  if (token) {
    authStore.update((state) => ({
      ...state,
      token,
      user: JSON.parse(user),
    }));
  }
}

export const actions = {
  default: async ({request, cookies}) => {
    const data = await request.formData();
    const payload = {
      email: data.get('email'),
      name: data.get('name'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword')
    };
    try {
      const res = await axios.post<{ access_token: string, user: IUser }>('/register', payload);
      authStore.update((state) => ({
        ...state,
        token: res.data.access_token,
        error: null,
        isLoading: false,
      }));
      cookies.set('token', res.data.access_token);
      cookies.set('user', JSON.stringify(res.data.user));
    } catch (err: any) {
      authStore.update((state) => ({
        ...state,
        token: null,
        error: err.response.data.message,
        isLoading: false,
      }));
    }
  }
};