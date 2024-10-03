import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <h3>Information</h3>
            <p>
            Hair Hamony is typically professional and stylish, offering a comfortable environment where clients can relax and enhance their appearance.
            </p>
          </div>
          <div className="column">
            <h3>Our Services</h3>
            <ul>
              <li>Haircuts in both modern and classic styles</li>
              <li>Beard trimming, shaving, and facial care</li>
              <li>Consultation on hairstyles that suit individual face shapes and personal style</li>
              <li>Hair care services such as washing, perming, dyeing, and styling</li>
            </ul>
          </div>
          <div className="column">
            <h3>Schedule</h3>
            <ul>
              <li>Monday - Sunday</li>
              <li>08:00 am - 10:00 pm</li>
            </ul>
          </div>
          <div className="column">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="https://www.facebook.com">Facebook</a></li>
              <li><a href="https://www.instagram.com">Instagram</a></li>
              <li><a href="https://www.twitter.com">Twitter</a></li>
            </ul>
          </div>
          <div className="column">
      <h3>Contact Us</h3>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'white' }} /> FPT University, Thu Duc City, HCM, VN
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} /> hairhamony@gmail.com
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} style={{ color: 'white' }} /> (+84) 1234 5678
      </p>
    </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
