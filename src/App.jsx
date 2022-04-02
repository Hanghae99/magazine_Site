import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/store";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/sign" exact component={SignUpPage} />
      </ConnectedRouter>
    </>
  );
}

export default App;
