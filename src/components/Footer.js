import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="De' Coal Pot" className="footer-logo" style={{ borderRadius: 90 }} />
          <p>Authentic West Indian Cuisine<br />Cruz Bay, St. John, USVI</p>
          <a
            href="https://www.facebook.com/DeCoalPot"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-fb"
          >
            Facebook →
          </a>
        </div>

        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/vibe">The Vibe</Link></li>
            <li><Link to="/visit">Visit</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <address>
            <p>1E 96 Cruz Bay<br />St. John, USVI 00830</p>
            <a href="tel:+13406901127">(340) 690-1127</a>
            <a href="tel:+13402050001">(340) 205-0001</a>
          </address>
        </div>

        <div className="footer-col">
          <h4>Hours</h4>
          <p>Mon – Sat: 11am – 9pm</p>
          <p>Sunday: 4pm – 9pm</p>
          <p className="footer-note">Parties of 5+ call ahead</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} De' Coal Pot · Cruz Bay, St. John, USVI</p>
      </div>
    </footer>
  );
}
