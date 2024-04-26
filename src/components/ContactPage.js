import React from 'react';
import './Assets/contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section id="contact-header" className="about-header">
        <h2>#How To Contact Us</h2>
        <p>
          MAIL US WE WILL HELP YOU
        </p>
      </section>
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>visit our location or mail us</h2>
          <ul>
            <li>
              <i className="fal fa-map"></i>
              <p>345 6 Ave SE, Calgary, AB T2G 4V1</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>bowvalleycollege.ca</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>+14034101400</p>
            </li>
          </ul>
          <p>
            And don’t worry about it. At every stage of every project we take on, we believe communication is key.
            So whether you have a question about our services or you’d like a quote, send us a note to discuss the details.
            It’s always no-obligation, so don’t worry about it! It all begins with an idea…
          </p>
        </div>
        <div className="map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10033.335812064332!2d-114.0559973!3d51.0469212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717ad00ad231a9%3A0x34c6c179aae00af8!2sBow%20Valley%20College%2C%20South%20Campus!5e0!3m2!1sen!2sca!4v1714078902393!5m2!1sen!2sca"
            width="400"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
