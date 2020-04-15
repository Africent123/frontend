import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import "./assets/css/style.css";
import {Provider} from "react-redux";
import {configureStore} from "./Redux/ConfigureStore";



import App from "./App";

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render( <Provider store={store}> <App /></Provider> , document.getElementById('root'));

registerServiceWorker();