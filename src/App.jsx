import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
