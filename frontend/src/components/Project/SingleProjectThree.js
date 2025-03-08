import React from 'react';
import { Link } from 'react-router-dom';

import projectImg from '../../assets/img/project/pro-43.jpg';

const SingleProjectThree = (props) => {
  const { itemClass, Image, Title, Category, CategoryTwo, onClickHandler } =
    props;

  return (
    <div className={itemClass ? itemClass : 'project-3__item'}>
      <div className="project-3__main-img">
        <img src={Image ? Image : projectImg} alt={Title} />
        <div className="project-3__img-icon">
          <Link className="popup-image" to="#" onClick={onClickHandler}>
            <i className="fal fa-search-plus"></i>
          </Link>
        </div>
        <div className="project-3__img-text">
          <h4>
            <Link to="/project-details">
              {Title ? Title : 'Research & Surveys'}
            </Link>
          </h4>
          <i>
            {Category ? Category : 'Business'} /{' '}
            <span>{CategoryTwo ? CategoryTwo : 'Branding'}</span>
          </i>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectThree;
