import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../utils/Cookie";
import { auth } from "../../utils/firebase";
import { useHistory } from "react-router";

// const history = useHistory()

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
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    history.push("/");
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
              setUser({ user_name: user_name, id: id, user_profile: "" })
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
  loginAction,
};

export { actionCreators };
