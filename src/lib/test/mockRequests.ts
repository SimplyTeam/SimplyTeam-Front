import type MockAdapter from "axios-mock-adapter"
import { fakeSession } from "$lib/test/data/session"

export const mockRequests = (mock: MockAdapter) => {
  /** Auth */
  mock.onGet("me").reply(200, fakeSession)
  mock.onPost("login").reply(200, fakeSession)
  mock.onPost("register").reply(200, fakeSession)
}
