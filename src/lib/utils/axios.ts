import axios from 'axios'
import MockAdapter from "axios-mock-adapter"
import { mockRequests } from "$lib/test/mockRequests"

function api(token?: string) {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL as string,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (import.meta.env.MODE === "testing") {
    mockRequests(new MockAdapter(instance))
  }

  return instance
}

export default api
