import React from 'react';
import {render} from 'react-dom';
import stylesheets from './stylesheets/style.css';
import App from './components/App.js';

function Main(){
    return <App />
}

render(<Main />, document.getElementById(`root`));