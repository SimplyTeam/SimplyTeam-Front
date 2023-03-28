import axios from '$lib/utils/axios'
import {fail, redirect, type ServerLoad} from '@sveltejs/kit'
interface IUser {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
export const load: ServerLoad = ({locals}) => {
  if (locals.accessToken) throw redirect(302, '/workspaces')
}

export const actions = {
  google: async({request, cookies}) => {
    try {
      const res = await axios().get<{ access_token: string }>('/auth/google')
      return res.data
    }
    catch (err: any) {
      return fail(422, {message: "Une erreur est survenue"})
    }
  },
  register: async ({request, cookies}) => {
    const data = await request.formData()
    const payload = {
      email: data.get('email'),
      name: data.get('name'),
      password: data.get('password'),
      password_confirmation: data.get('confirmPassword')
    }

    try {
      const res = await axios().post<{ access_token: string, user: IUser }>('api/register', payload)

      cookies.set('access_token', res.data.access_token, {
        // send cookie for every page
        path: '/',
        // server side only cookie so you can't use `document.cookie`
        httpOnly: true,
        // only requests from same site can send cookies
        // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30
      })
    } catch (err: any) {
      return fail(422, err.response.data)
    }
  }
}
