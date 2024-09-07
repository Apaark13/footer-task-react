import React from 'react';
import AboutUs from './components/AboutUs';
import CustomerService from './components/CustomerService';
import ContactUs from './components/ContactUs';
import SocialMediaLinks from './components/SocialMediaLinks';
import LegalLinks from './components/LegalLinks';
import Terms from './components/Terms';
import './App.scss'
import Banner from './header/banner';
import Center from './header/center';
import NavStrip from './header/navStrip';
const Footer = () => {
  return (
    <>
    <header>
      <Banner/>
      <Center/>
      <NavStrip/>
    </header>
    <img src="home.png" alt="" />
    <footer>
      <div className="content">
        <AboutUs />
        <CustomerService />
        <ContactUs />
      </div>
      <hr />
      <div className="bottom">
        <div className="legal">

        <LegalLinks />
        <SocialMediaLinks />
        <Terms/>

        </div>
        <p className="copyright">© 2002 - 2024 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;