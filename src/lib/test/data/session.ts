import type { IUser } from "$lib/models/user"

export const fakeUser: IUser = {
  name: "test",
  email: "test",
  id: 1
}

export const fakeToken = "fakeToken"

export const fakeSession = {
  user: fakeUser,
  accessToken: fakeToken
}
