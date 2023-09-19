import React from 'react'
import  "./Styles/LandingPage.css"
import Home from './LandingPage/Home'
import Features from './LandingPage/Features'
import Works from './LandingPage/Works'
import About from './LandingPage/About'
import Contact from './LandingPage/Contact'

export const LandingPage = () => {
  return (
    <div className="landingPage">
          <Home/>
          <Features/>
          <About/>   
        <footer className="footer">
          <Contact/>
        </footer>
    </div>
  )
}
