import React from 'react';
import ReactDOM from 'react-dom/client';
import RegisterForm from './components/shared/RegisterForm/RegisterForm';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
      <BrowserRouter>
            <div>
              <RegisterForm/>
            </div>
      </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
