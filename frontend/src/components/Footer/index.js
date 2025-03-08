import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo/footer-logo.png';
import footerBG from '../../assets/img/footer/footer-bg.jpg';
import { useSelector } from 'react-redux';

const Footer = (props) => {
  const { footerLogo, footerClass } = props;
  const homeData = useSelector((state) => state.data.home.data);
  return (
    <footer>
      <div
        className={footerClass ? footerClass : 'footer__area footer__plr'}
        style={{ backgroundImage: `url(${footerBG})` }}
      >
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-7 mb-70 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <div className="footer__widget footer-col-1">
                <div className="footer__logo">
                  <Link to="/">
                    <img src={footerLogo ? footerLogo : Logo} alt="" />
                  </Link>
                </div>
                <div className="footer__content">
                  <div className="footer__text">
                    <p>
                    Simple, Smart IT Solutions That Accelerate Your Business Growth.
                    </p>
                  </div>
                  <div className="footer__number-wrapper d-flex align-items-center">
                    <div className="footer__number-icon">
                      <span>
                        <i className="fal fa-phone-alt"></i>
                      </span>
                    </div>
                    <div className="footer__number-info">
                      <span>Have Any Questions?</span>
                      <a href={`tel:+4${homeData[0].telefon}`}>{homeData[0]?.telefon}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-5 mb-70 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >

            </div>

            {/* <div
              className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-5 mb-70 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <div className="footer__widget footer-col-3">
                <h4 className="footer__title">
                  <a href="#">Support Link</a>
                </h4>
                <div className="footer__menu-list">
                  <ul>
                    <li>
                      <a href="#">Privacy and policy</a>
                    </li>
                    <li>
                      <a href="#">Cookie consent</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div> */}

            {/* <div
              className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-7 mb-70 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <div className="footer__widget footer-col-4">
                <div className="footer__social-box">
                  <span>Social Media:</span>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>

      <div className="copyright__area copyright__plr black-bg-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-md-6 wow animate__slideInUp"
              data-wow-duration="1.1s"
            >
              <div className="copyright__text">
                <span>All Right Reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
