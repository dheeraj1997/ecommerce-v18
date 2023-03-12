import * as Actions from "../../constants/actions"

export const signIn = (email, password) => ({
  type: Actions.SIGNIN, payload: {
    email, password
  }
})
export const signInSuccess = (auth) => ({
  type: Actions.SIGNIN_SUCCESS, payload: auth
})
export const signUp = (user) => ({
  type: Actions.SIGNUP, payload: user
})
export const signOut = () => ({
  type: Actions.SIGNOUT,
})
