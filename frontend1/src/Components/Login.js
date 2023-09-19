import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Styles/Login.css";
import { useGlobalContext } from '../Data/globalContext';

const BASE_URL = "http://localhost:5000/api/v1/";


export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const {authenticate, userName} = useGlobalContext();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const signIn = async (e) => {
    e.preventDefault()
    await axios
      .post(`${BASE_URL}login`, user)
      .then((res) => {
        if (res.data.user === true){       
          authenticate(true);
          console.log(res);
          userName(res.data.username);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('loggeduser', res.data.username)
          localStorage.setItem('loggedemail', res.data.email)   
          navigate('/Dashboard');
        } else {
          alert("Incorrect Username or Password");
          navigate('/Login')
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });
  };

  return (
    <div>
      <div className="login-box">
        <div>Login To Your Account</div>
        <br/>
        <div>
          <form autoComplete="off">
            <div>
              <div className="user-box">
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <div className="user-box">
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Your password"
                />
              </div>
            </div>
            <div>
              <button onClick={signIn} className = 'submit'>Login
                  <div className="arrow-wrapper">
                  <div className="arrow"></div>
                  </div>
              </button>
            </div>
          </form>
        </div>
        <div>
          
          <br/>
          <div className="anchor">
            <a
              href="#"
              onClick={() => navigate('/Register')}
            >
              You don't have an account?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
