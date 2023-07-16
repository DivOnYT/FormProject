import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './components/shared/RegisterForm/RegisterForm';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "bootstrap/js/src/button";


const App = () => {
    return (
        <BrowserRouter>
            <div>
              <Button>Salut</Button>
              <RegisterForm>

              </RegisterForm>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);