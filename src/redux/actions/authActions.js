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

export const signOutSuccess = () => ({
  type: Actions.SIGNOUT_SUCCESS
});

export const onAuthStateChanged = () => ({
  type: Actions.ON_AUTHSTATE_CHANGED
});

export const onAuthStateSuccess = (user) => ({
  type: Actions.ON_AUTHSTATE_SUCCESS,
  payload: user
});

export const onAuthStateFail = (error) => ({
  type: Actions.ON_AUTHSTATE_FAIL,
  payload: error
});

export const resetPassword = (email) => ({
  type: Actions.RESET_PASSWORD,
  payload: email
});

export const signInWithGoogle = () => ({
  type: Actions.SIGNIN_WITH_GOOGLE
});

export const signInWithFacebook = () => ({
  type: Actions.SIGNIN_WITH_FACEBOOK
});

