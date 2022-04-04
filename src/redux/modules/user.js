import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../utils/Cookie";
import { auth } from "../../utils/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import firebase from "firebase/app";

//action type

const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

//action creators
export const logOut = createAction(LOG_OUT, (user) => ({ user }));
export const getUser = createAction(GET_USER, (user) => ({ user }));
export const setUser = createAction(SET_USER, (user) => ({ user }));

//initial State
const initialState = {
  user: null,
  isLogin: false,
};

//middleware
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    const auth = getAuth();

    setPersistence(auth, browserSessionPersistence)
      .then((res) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, id, pwd)
          .then((user) => {
            console.log(user);
            dispatch(
              setUser({
                user_name: user.user.displayName,
                id: id,
                user_profile: "",
                uid: user.user.uid,
              })
            );

            history.push("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, errorMessage);
          });
        return signInWithEmailAndPassword(auth, id, pwd);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };
};

const signUpFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        // console.log(user);
        auth.currentUser
          .updateProfile({
            displayName: user_name,
          })
          .then(() => {
            dispatch(
              setUser({
                user_name: user_name,
                id: id,
                user_profile: "",
                uid: user.user.uid,
              })
            );
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
      });
  };
};

const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            user_name: user.displayName,
            user_profile: "",
            id: user.email,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  };
};

const logOutFB = () => {
  return function (dispatch, getState, { history }) {
    auth.signOut().then(() => {
      dispatch(logOut());
      history.replace("/");
    });
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("isLogin", "success");
        draft.user = action.payload.user;
        draft.isLogin = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("isLogin");
        draft.user = null;
        draft.isLogin = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creators export
const actionCreators = {
  signUpFB,
  logOut,
  getUser,
  loginFB,
  loginCheckFB,
  logOutFB,
};

export { actionCreators };
