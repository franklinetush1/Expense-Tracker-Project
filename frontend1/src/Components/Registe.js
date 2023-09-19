import React, { useState } from 'react';
import axios from 'axios';
import "./Styles/Register.css";
import { useNavigate } from 'react-router-dom';

const BASE_URL = "http://localhost:5000/api/v1/";

export const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const validateEmail = (email) => {
        // Basic email validation using a regular expression
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            return "Invalid email address";
        }
        return "";
    };

    const validatePassword = (password) => {
        // Password validation: At least 8 characters
        if (password.length < 8) {
            return "Password must be at least 8 characters";
        }
        return "";
    };

    const validateName = (name) => {
        // Name validation: At least 5 characters and contains a space
        if (name.length < 5 || !name.includes(" ")) {
            return "Name must be at least 5 characters and contain a space";
        }
        return "";
    };

    const register = () => {
        const { name, email, password } = user;

        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        const nameError = validateName(name);

        setErrors({
            name: nameError,
            email: emailError,
            password: passwordError
        });

        if (!emailError && !passwordError && !nameError && user) {
            axios.post(`${BASE_URL}Register`, user)
                .then(res => console.log(res))
                .catch(error => console.error(error));
        }

        setUser({
            name: "",
            email: "",
            password: ""            
        })
    };

    return (
        <>
            <div className='register-box'>
                <div className='regHeder'>
                    Create a new account
                </div>
                
                <div>
                    <form>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    placeholder="FullName"
                                />
                                <div className="error">{errors.name}</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                                <div className="error">{errors.email}</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                />
                                <div className="error">{errors.password}</div>
                            </div>
                        </div>
                        <div>
                            <button type="button" onClick={register} className = 'submit'>                                
                                Register
                                <div className="arrow-wrapper">
                                    <div className="arrow"></div>
                                </div>
                            </button>
                        </div>                        
                            <a href="#" onClick={() => navigate('/Login')}>Already have an account? Sign in</a>                        
                    </form>
                </div>
            </div>
        </>
    );
};
