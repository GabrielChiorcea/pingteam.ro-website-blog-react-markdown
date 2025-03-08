import React from 'react';
import { Link } from 'react-router-dom';

import ctaIcon from '../../assets/img/cta/cta-icon.png';
import ctaBG from '../../assets/img/cta/cta-bg.png';

const CTA = () => {
  return (
    <div
      className="cta__area cta__bg cta__plr p-relative wow animate__fadeInUp"
      data-wow-duration="1.1s"
      style={{ backgroundImage: `url(${ctaBG})` }}
    >
      <div className="cta__shape-icon d-md-block">
        <img src={ctaIcon} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta__section-wrapper text-center">
              <div className="cta__section-box">
                <h4
                  className="cta__title wow animate__fadeInUp"
                  data-wow-duration="1.1s"
                  data-wow-delay=".7s"
                >
                  Transform Your Infrastructure Today
                </h4>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">
                Experience expert Linux administration and custom development.
                </p>
              </div>
              <div
                className="cta__btn wow animate__fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay=".9s"
              >
                <Link
                  to="/contact"
                  className="white-btn tp-btn-hover alt-color"
                >
                  <span>Contact</span>
                  <b></b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
