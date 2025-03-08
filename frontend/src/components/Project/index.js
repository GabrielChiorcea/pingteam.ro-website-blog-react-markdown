import React from 'react';
import { Link } from 'react-router-dom';

import projectImg from '../../assets/img/project/pro-4.jpg';

const SingleProject = (props) => {
  const { itemClass, Image, Title, categoryOne, categoryTwo, onClickHandler } =
    props;

  return (
    <div className={itemClass ? itemClass : 'project-2__item'}>
      <div className="project-2__thumb">
        <Link to="/project-details">
          <img src={Image ? Image : projectImg} alt="" />
        </Link>
        <div className="project-2__img-icon">
          <Link className="popup-image" to="#" onClick={onClickHandler}>
            <i className="fal fa-search-plus"></i>
          </Link>
        </div>
        <div className="project-2__img-text">
          <h4>
            <Link to="/project-details">
              {Title ? Title : 'Conference On Projects'}
            </Link>
          </h4>
          <i>
            {categoryOne ? categoryOne : 'BUSINESS'} /{' '}
            <span>{categoryTwo ? categoryTwo : 'BRANDING'}</span>
          </i>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
