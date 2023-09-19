import React from 'react'
import background from "../../img/image-42.png"
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className="home-container" id='Home'>
        <Navbar/>
    <div className="homebackground">
        <img src= {background}/>        
    </div>
    <div className="hometext">
    <h1> Take Control of Your Finances</h1>
    <h2>Track, Manage, and Analyze Your Expenses Effortlessly</h2>
    </div>
    <a class="fancy" href="#">
      <span class="top-key"></span>
      <span class="text">Start Now</span>
      <span class="bottom-key-1"></span>
      <span class="bottom-key-2"></span>
    </a>
                
    </div>
  )
}

export default Home