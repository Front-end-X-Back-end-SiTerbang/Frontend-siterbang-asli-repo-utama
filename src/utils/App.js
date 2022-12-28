import Router from "../routes/index";
import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
