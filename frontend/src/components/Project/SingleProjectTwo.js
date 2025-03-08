import React from 'react';
import { Link } from 'react-router-dom';

import projectImg from '../../assets/img/project/pro-10.jpg';

const SingleProjectTwo = (props) => {
  const { itemClass, Image, Title, Category } = props;

  return (
    <div className={itemClass ? itemClass : 'project-3__item'}>
      <div className="project-3__main-img">
        <img src={Image ? Image : projectImg} alt={Title} />
      </div>
      <div className="project-3__content d-flex align-items-center justify-content-between">
        <div className="project-3__content-text">
          <h5 className="project-3__title-sm">
            <Link to="/project-details">
              {Title ? Title : 'Research & Surveys'}
            </Link>
          </h5>
          <span>{Category ? Category : 'Brand Strategy'}</span>
        </div>
        <div className="project-3__icon">
          <Link to="/project-details">
            <i className="fal fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectTwo;
