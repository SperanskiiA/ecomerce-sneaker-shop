import React from 'react';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { BsTelegram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 FancyStore All rights reserved</p>
      <p className="icons">
        <a href="https://www.linkedin.com/in/arsper/" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://t.me/sp_aron" target="_blank">
          <FaTelegramPlane />
        </a>
      </p>
    </div>
  );
};

export default Footer;
