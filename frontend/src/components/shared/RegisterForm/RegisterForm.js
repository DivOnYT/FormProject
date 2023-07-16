import React from 'react';
import logo from './logo.png';
import './RegisterForm.css';
import { Link } from 'react-router-dom';
import Button from "bootstrap/js/src/button";

const RegisterForm = () => {
    return (
        <div className="RegisterForm">
            <Link to="/">
                <img src={logo} alt="logo" className="Register-logo" />
            </Link>
            <div className="h1 text-center">School App</div>
          <Button>Coucpo</Button>
        </div>
    );
}

export default RegisterForm;