import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import SectionTitle from "../../components/SectionTitle";
import SingleBlog from "../../components/Blog";

const Blog = () => {
  const homeData = useSelector((state) => state.data.home);

  const allBlogData = useSelector((state) => state.data.blog.data);
  const image = process.env.REACT_APP_API_URL_IMAGE;

  // Folosești useMemo pentru a calcula blogData doar când allBlogData se schimbă
  const blogData = useMemo(() => {
    return allBlogData.slice(-3).reverse();
  }, [allBlogData]);

  return (
    <div className="blog__area blog__mlr blog__space">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-xl-7 col-xxl-9 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".3s"
          >
            <SectionTitle
              sectionClass="blog__section-box text-center pb-40 section-title-fixed-width"
              subTitle={homeData[0]?.blogPill}
              Title={homeData[0]?.blogTitle}
            />
          </div>
        </div>
        <div className="row">
          {blogData?.map((blog) => (
            <div
              key={blog.id}
              className="col-xl-4 col-lg-6 col-md-6 mb-70 wow animate__fadeInUp"
              data-wow-duration="1.1s"
              data-wow-delay=".5s"
            >
              <SingleBlog
                blogImg={`${image}${blog.blogImage.url}`}
                blogClass="blog__item"
                categoryClass="blog__catagory blog__catagory-color-1"
                titleClass="blog__title blog__title-color-1"
                btnClass="blog__link"
                Title={blog?.blogTitle}
                Description={blog?.shortDescription}
                blogCategory={blog?.category?.name}
                blogAuthor={blog?.author?.firstName}
                publishedDate={blog?.creatAt}
                btnText="See More"
                slug={blog?.slug}
                authorSlug={blog?.author?.slug}
                categorySlug={blog?.category?.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
