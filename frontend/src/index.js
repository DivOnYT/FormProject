import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/shared/Header/Header';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);