import { Provider } from "react-redux";
import store from "./state-managment/store";
import LoginPage from "./user/login-page";
import SignUpPage from "./user/sign-up-page";
import GamePage from "./game/game-page";
import PageNotFound from "./user/page-not-found";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </Provider>
);
export default App;
