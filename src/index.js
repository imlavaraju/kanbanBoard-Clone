// Importing necessary dependencies and components
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Importing global styles
import App from "./App"; // Importing the main App component
import reportWebVitals from "./reportWebVitals"; // Importing performance reporting
import store from "./redux/Store"; // Importing the Redux store
import { Provider } from "react-redux"; // Importing the Provider component from react-redux

// Creating a root element to render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    {/* Enabling StrictMode for highlighting potential problems */}
    <Provider store={store}>
      {" "}
      {/* Providing the Redux store to the application */}
      <App /> {/* Rendering the main App component */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // Calling the reportWebVitals function to measure performance
