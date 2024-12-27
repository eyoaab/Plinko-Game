import { Provider } from "react-redux";
import store from "./store";
import LoginPage from "./user/login-page";
import SignUpPage from "./user/sign-up-page";
import GamePage from "./game/game-page";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  </Provider>
);
export default App;
