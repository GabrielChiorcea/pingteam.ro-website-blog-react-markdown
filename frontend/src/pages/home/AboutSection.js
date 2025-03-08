import React, { useState } from 'react';

import aboutImg from '../../assets/img/about/about-1.png';
import shapeImg1 from '../../assets/img/about/about-shape-1.png';
import shapeImg2 from '../../assets/img/about/about-shape-2.png';
import { useSelector } from 'react-redux';

const About = () => {
  const homeData = useSelector((state) => state.data.home);

  return (
    <div className="about__area pb-100 p-relative">
      <div className="about__shape-1 d-none d-md-block">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="about__shape-2 d-none d-xl-block">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="about__img">
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="about__section-box pb-10">
              <h4 className="section-subtitle char-anim"> {homeData?.data[0]?.aboutPill} </h4>
              <h3 className="section-title char-anim">
              {homeData?.data[0]?.aboutTitle}             
              </h3>
            </div>
            <div className="about__content">
              <p className="char-anim-2">
              {homeData?.data[0]?.aboutDescription}
              </p>
            </div>
            <div className="about__list-item">
              <ul>
                {homeData?.data[0]?.aboutStrongPoints.map((item) => (  
                  <li key={item.id}>
                    <i className="far fa-check"></i>
                      <span>{item.aboutPoints}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="row gx-0">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 about__border-right">
                <div className="about__contact-box d-flex align-items-center">
                  <div className="about__contact-icon">
                    <span>
                      <i className="fas fa-phone-alt"></i>
                    </span>
                  </div>
                  <div className="about__contact-number">
                    <a href="tel:">{homeData?.data[0]?.aboutContactnumber}</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
