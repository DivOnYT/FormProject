import React from 'react';
import logo from './logo.png';
import './RegisterForm.css';
import {Link, redirect} from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div className="RegisterForm">
            <Link to='https://fr.legacy.reactjs.org/'>
                <img src={logo} alt="logo" className="Register-logo" />
            </Link>
            <div className="h1 text-center">School App</div>
        </div>
    );
}

export default RegisterForm;