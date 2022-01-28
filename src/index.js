import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./components/Shop/Shop";
import SignInForm from "./components/SignIn/SignIn";
import SignUpForm from "./components/SignUp/SignUp";
import store from "./redux/store";
import { auth } from "./firebase/firebase.utils";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<Shop />} />
            <Route path="signin" element={<SignInForm />} />
            <Route path="signup" element={<SignUpForm />} />
            <Route path="signout" element={() => {
              auth.signOut();
              
              return (<Navigate to="/" />);
            }} />
            <Route path="/checkout" element={<CheckoutPage />} />
            
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There"s nothing here!</p>
                </main>
              }
            />
          </Route>
          
        </Routes>
      
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
