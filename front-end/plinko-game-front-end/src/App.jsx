import { Provider } from "react-redux";
import store from "./store";
import LoginPage from "./user/login-page";
import SignUpPage from "./user/sign-up-page";

const App = () => (
  <Provider store={store}>
    <SignUpPage />
  </Provider>
);
export default App;
