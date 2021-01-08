import React from 'react';
import pizzaCut from '../img/cut.png';
import './Contact.scss';

const Contact = () => {
  const sendMessage = () => {};

  return (
    <div className="Contact">
      <div className="Contact-headline">
        <img src={pizzaCut} alt="" />
        <p>CONTACT</p>
      </div>
      <div className="Contact-content">
        <div className="Contact-content-info">
          <div>
            <h3>ADRESS</h3>
            <p>Zagrebačka cesta 118</p>
            <p>Zagreb, 10 000, CRO</p>
          </div>
          <div>
            <h3>CALL OR WRITE</h3>
            <p>
              <span>Phone /</span> 00385 91 300 300
            </p>
            <p>
              <span>Email /</span> info@ivanspizza.com
            </p>
          </div>
          <div>
            <h3>OPENING HOURS</h3>
            <p>
              <span>Mon – Fri /</span> 8am – 11pm
            </p>
            <p>
              <span>Saturday /</span> 8am – 1am
            </p>
            <p>
              <span>Sunday </span> (closed)
            </p>
          </div>
        </div>
        <form className="Contact-content-form">
          <h3>CONTACT FORM</h3>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit" className="Contact-content-form-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
