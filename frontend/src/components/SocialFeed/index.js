import React from 'react';

import linkedIn from '../../assets/img/social/linkedIn.png';
import github from '../../assets/img/social/github.png';


const SocialFeed = (props) => {

  const { linkedInlink, githublink } = props;


  return (
    <div className="row">
      <div
        className="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 d-xl-none d-xxl-block wow animate__fadeInUp"
        data-wow-duration=".9s"
        data-wow-delay=".5s"
      >
        <div className="social__item social__border-color-1 d-flex justify-content-between align-items-center">
          <div className="social__content-box d-flex align-items-center">
            <div className="social__icon">
              <img src={github} alt="" />
            </div>
            <div className="social__text">
              <h4 className="social__title">
                <a href={githublink}>Github</a>
              </h4>
              <span>Visit me</span>
            </div>
          </div>
          <div className="social__link contact__color-1">
            <a href={githublink}>
              <span>
                <i className="fal fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
        className="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 d-xl-none d-xxl-block wow animate__fadeInUp"
        data-wow-duration=".9s"
        data-wow-delay=".5s"
      >
        <div className="social__item social__border-color-1 d-flex justify-content-between align-items-center">
          <div className="social__content-box d-flex align-items-center">
            <div className="social__icon">
              <img src={linkedIn} alt="" />
            </div>
            <div className="social__text">
              <h4 className="social__title">
                <a href={linkedInlink}>LinkedIn</a>
              </h4>
              <span>Visit me</span>
            </div>
          </div>
          <div className="social__link contact__color-1">
            <a href={linkedInlink}>
              <span>
                <i className="fal fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SocialFeed;
