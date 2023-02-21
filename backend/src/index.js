import React from "react";
// import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
//import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";
import  ThemeContext  from "./context/ThemeContext"; 
import SimpleReactLightbox from "simple-react-lightbox";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// const container = document.getElementById("root");
// const root = createRoot(container);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
   <SimpleReactLightbox>
    <BrowserRouter>
	<ThemeContext>
      <App />
	</ThemeContext>
    </BrowserRouter>
    </SimpleReactLightbox>
  </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
// If you want your app to work offline and load faster, you can chađinge
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
