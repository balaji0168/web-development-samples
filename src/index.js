import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Login from './Login/Login';
import Details from './Details/Details';
import Pid from './Pid/Pid';
import Qs from './Qs/Qs';
import Lab from './Lab/Lab';
import Tab from './patientTable/table';
import Dh from './Doctorhomepage/Dh';
import Pre from './Prescription/Pre';

import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Login/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
