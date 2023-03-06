import React from "react";

const Footer = () => {
  const footerLinks = [
    "Privacy and legal terms",
    "Cookie preferences",
    "Careers",
    "Site map",
    "Do not sell my information",
  ];

  const socials = [
    "fa-brands fa-facebook",
    "fa-brands fa-linkedin-in",
    "fa-brands fa-twitter",
    "fa-brands fa-instagram",
    "fa-brands fa-tiktok",
  ];

  return (
    <footer>
      <div className="footer-top">
        <div className="company">
          <div className="company-links">
            <ul>
              {footerLinks.map((link) => (
                <li>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="company-socials">
          <ul>
            {socials.map((social) => (
              <li>
                <i className={social}></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 myPort, Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
