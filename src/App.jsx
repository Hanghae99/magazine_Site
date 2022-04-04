import "./App.css";
import LoginPage from "./pages/LoginPage";
import ReviewPage from "./pages/ReviewPage";
import { Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/store";
import { actionCreators as userActions } from "./redux/modules/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { apiKey } from "./utils/firebase";

function App() {
  const dispatch = useDispatch();
  const sessionKey = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const isSession = sessionStorage.getItem(sessionKey) ? true : false;

  useEffect(() => {
    if (isSession) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/sign" exact component={SignUpPage} />
        <Route path="/review" exact component={ReviewPage} />
      </ConnectedRouter>
    </>
  );
}

export default App;
