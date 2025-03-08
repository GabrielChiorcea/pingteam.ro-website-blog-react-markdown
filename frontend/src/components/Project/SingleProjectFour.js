import React from 'react';
import { Link } from 'react-router-dom';

import projectImg from '../../assets/img/project/pro-14.jpg';

const SingleProjectFour = (props) => {
  const {
    itemClass,
    categoryClass,
    TitleClass,
    btnClass,
    Image,
    Title,
    Description,
    Category,
    btnText,
  } = props;

  return (
    <div className={itemClass ? itemClass : 'project-4__item p-relative'}>
      <div className="project-4__main-img">
        <img src={Image ? Image : projectImg} alt="" />
      </div>
      <div className="project-4__content-box">
        <div
          className={
            categoryClass
              ? categoryClass
              : 'project-4__category category-color-1'
          }
        >
          <span>{Category ? Category : 'Marketing'}</span>
        </div>
        <div className="project-4__text">
          <h4
            className={
              TitleClass ? TitleClass : 'project-4__title-sm title-color-1'
            }
          >
            <Link to="/project-details">
              {Title ? Title : 'Agency Best Projects'}
            </Link>
          </h4>
          <p>
            {Description
              ? Description
              : 'Business building it before the tab providet management, Payroll & Worksite'}
          </p>
        </div>
        <div className={btnClass ? btnClass : 'project-4__link link-color-1'}>
          <Link to="/project-details">
            <span>
              {btnText ? btnText : 'Read More'}
              <i className="fal fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectFour;
