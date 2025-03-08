import { Link } from 'react-router-dom';

import Image from '../../assets/img/blog/blog-1.jpg';

const SingleBlog = (props) => {
  const {
    blogImg,
    blogClass,
    categoryClass,
    titleClass,
    btnClass,
    Title,
    Description,
    blogCategory,
    blogAuthor,
    publishedDate,
    btnText,
    slug,
    authorSlug,
    categorySlug
  } = props;
  return (
    <div className={blogClass ? blogClass : 'blog__item'}>
      <div className="blog__main-img fix">
        <a className="popup-image" href={blogImg ? blogImg : Image}>
          <img src={blogImg ? blogImg : Image} alt="" />
        </a>
      </div>
      <div className="blog__content">
        <div className="blog__meta pb-20 d-flex align-items-center">
          <div
            className={
              categoryClass
                ? categoryClass
                : 'blog__catagory blog__catagory-color-1'
            }
          >
            <a href={`/blog/${categorySlug}`}>{blogCategory ? blogCategory : 'Business'}</a>
          </div>
          <div className="blog__date">
            <a href={`/about-me/${authorSlug}`}>
              <span>
                By: {blogAuthor ? blogAuthor : 'Admin'},{' '}
                {publishedDate ? publishedDate : 'Jan,6, 2022'}
              </span>
            </a>
          </div>
        </div>
        <div className="blog__text">
          <h4
            className={
              titleClass ? titleClass : 'blog__title blog__title-color-1'
            }
          >
            <Link to={`/blog-details/${slug}`}>
              {Title
                ? Title
                : 'Devest For Ukraine for This Blog Best Charity On'}
            </Link>
          </h4>
          <p>
            {Description
              ? Description
              : 'There are many variations of passages of agency Lorem Ipsum Fasts injecte'}
          </p>
        </div>
        <div className={btnClass ? btnClass : 'blog__link blog__link-color-1'}>
          <Link to="/blog">
            {btnText ? btnText : 'See More'}{' '}
            <span>
              <i className="fal fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
