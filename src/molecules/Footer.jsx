import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-logo">
              <h3>Logo</h3>
              <p>The slogan is to be a suitable environment for people to create their business.</p>
              <ul className="social-icons">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
              </ul>
              <p>©2023 | Derya Design. All rights reserved.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-links">
              <h3>About</h3>
              <ul>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Featured</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Business solution</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-links">
              <h3>Community</h3>
              <ul>
                <li><a href="#">Events</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Podcast</a></li>
                <li><a href="#">Photo album</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-links">
              <h3>Socials</h3>
              <ul>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="footer-bottom">
              <p>Privacy & Policy | Terms & Condition</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
