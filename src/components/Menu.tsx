import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import './Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <img src={logo} alt="logo" className="Menu-logo" />
      <ul className="Menu-list">
        <li>HOME</li>
        <li>MENU</li>
        <li>PIZZAS</li>
        <li>ABOUT US</li>
        <li>CONTACT</li>
      </ul>
      <footer className="Menu-footer">
        <ul className="Menu-footer-socials">
          <li>
            <a
              className="fa sh-socials-url fa-twitter fa-lg"
              href="#"
              title="Twitter"
              target="_blank"
            ></a>
          </li>
          <li>
            <a
              className="fa sh-socials-url fa-facebook fa-lg"
              href="#"
              title="Facebook"
              target="_blank"
            ></a>
          </li>
          <li>
            <a
              className="fa sh-socials-url fa-linkedin fa-lg"
              href="#"
              title="LinkedIn"
              target="_blank"
            ></a>
          </li>
          <li>
            <a
              className="fa sh-socials-url fa-google-plus fa-lg"
              href="#"
              title="Google Plus"
              target="_blank"
            ></a>
          </li>
        </ul>
        <hr />
        <div className="Menu-footer-credits">
          <p>@ 2020 Ivan's. Made by</p>
          <a
            href="http://ivanscript.com/"
            target="_blank"
            className="manufacturer"
          >
            IvanScript
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
