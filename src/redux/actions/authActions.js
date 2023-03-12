import * as Actions from "../../constants/actions"

export const AuthActions = {
  signIn: (email, password) => ({
    type: Actions.SIGNIN,
    payload: {
      email,
      password
    }
  }),
  signInSuccess: (auth) => ({
    type: Actions.SIGNIN_SUCCESS,
    payload: auth
  }),
  signUp: (user) => ({
    type: Actions.SIGNUP,
    payload: user
  }),
  signOut: () => ({
    type: Actions.SIGNOUT,
  })
}
