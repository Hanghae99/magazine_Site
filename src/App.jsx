import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";

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
