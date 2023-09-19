import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="footer-wrapper" id="Contact">
      <div className="head1">
        <h1>Contact Us</h1>
      </div>
      <div className="footer-section-one">
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
};

export default Contact;
