
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 mt-5">
      <div className="container py-5">
        <div className="footer-social text-center mb-4">
          <span className="footer-subscribe-text">Subscribe to our newsletter:</span>
          <button className="subscribe-btn">Subscribe</button>
        </div>

        <div className="row g-5">
          {/* About Section */}
          <div className="col-lg-3 col-md-6 footer-column">
            <h6 className="footer-heading">Kazi Pap</h6>
            <div className="social-links">
              <a href="#!" className="social-icon"><FaFacebookF /></a>
              <a href="#!" className="social-icon"><FaTwitter /></a>
              <a href="#!" className="social-icon"><FaGoogle /></a>
              <a href="#!" className="social-icon"><FaInstagram /></a>
              <a href="#!" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Services Section */}
          <div className="col-lg-3 col-md-6 footer-column">
            <h6 className="footer-heading">Our Services</h6>
            <a href="#!" className="footer-link">Freelance Jobs</a>
            <a href="#!" className="footer-link">Full-Time Jobs</a>
            <a href="#!" className="footer-link">Job Listings</a>
            <a href="#!" className="footer-link">Employers</a>
          </div>

          {/* Useful Links Section */}
          <div className="col-lg-3 col-md-6 footer-column">
            <h6 className="footer-heading">Useful Links</h6>
            <a href="#!" className="footer-link">About Us</a>
            <a href="#!" className="footer-link">Privacy Policy</a>
            <a href="#!" className="footer-link">Terms & Conditions</a>
            <a href="#!" className="footer-link">FAQs</a>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 col-md-6 footer-column">
            <h6 className="footer-heading">Contact</h6>
            <p><FaMapMarkerAlt className="me-3" /> Nairobi, Kenya</p>
            <p><FaPhoneAlt className="me-3" /> +254 712 345 678</p>
            <p><FaEnvelope className="me-3" /> info@kazipap.com</p>
           
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="custom-container text-center py-3">
        <div className="custom-copyright">
          <div className="custom-row">
            <div className="custom-col">
              &copy; <a className="border-bottom text-warning" href="index.html">Kazi Pap</a>, All Rights Reserved. <a className='feroz' href="">Developed by Hassan Faruq.</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
