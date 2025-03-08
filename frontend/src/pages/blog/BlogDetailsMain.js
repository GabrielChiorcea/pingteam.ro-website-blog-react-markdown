import "github-markdown-css";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb";
import CTA from "../../components/CTA";


import NewestPost from "./NewestPost";

const BlogDetailsMain = () => {
  const { slug } = useParams();
  const image = process.env.REACT_APP_API_URL_IMAGE;
  const blogData = useSelector((state) => state.data.blog);
  const category = useSelector((state) => state.data.categories);

  const blogPost = blogData.data.find((post) => post.slug === slug);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }
  return (
    <main>
      <Breadcrumb pageTitle="Blog Details" />

      <div className="postbox__area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__details-wrapper pr-20">
                <article>
                  <div
                    className="postbox__thumb w-img wow animate__fadeInUp"
                    data-wow-duration="1.1s"
                  >
                    <Link to="/blog-details">
                      <img src={`${image}${blogPost.blogImage.url}`} alt="" />
                    </Link>
                  </div>
                  <div
                    className="postbox__details-title-box pb-30 wow animate__fadeInUp"
                    data-wow-duration="1.1s"
                  >
                    <h4 className="postbox__details-title">
                      {blogPost.blogTitle}
                    </h4>
                  </div>
                  {/* <div
                    className="postbox__details-img-box d-flex wow animate__fadeInUp"
                    data-wow-duration="1.1s"
                  >
                    <span className="text-center img-mr">
                      <img src={blogImg2} alt="" />
                    </span>
                    <span className="text-center">
                      <img src={blogImg3} alt="" />
                    </span>
                  </div> */}
                  <div
                    className="postbox__details-title-box pb-30 wow animate__fadeInUp markdown-body"
                    data-wow-duration="1.1s"
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {blogPost.blogContent}
                    </ReactMarkdown>
                  </div>
                  {/* comment */}
                  {/* <div
                    className="postbox__comment mb-65 wow animate__fadeInUp"
                    data-wow-duration="1.1s"
                  >
                    <h3 className="postbox__comment-title">3 Comments</h3>
                    <ul>
                      <li>
                        <div className="postbox__comment-box d-flex">
                          <div className="postbox__comment-info ">
                            <div className="postbox__comment-avater mr-20">
                              <img src={authorImg1} alt="" />
                            </div>
                          </div>
                          <div className="postbox__comment-text">
                            <div className="postbox__comment-name d-flex">
                              <h5>Justin Case</h5>
                              <span className="post-meta">
                                {' '}
                                April 8, 2022 at 7:38 am
                              </span>
                            </div>
                            <p>
                              Patient Comments are a collection of comments
                              submitted by viewers in <br /> response to a
                              question posed by a MedicineNet doctor.
                            </p>
                            <div className="postbox__comment-reply">
                              <a href="#">
                                <svg
                                  width="12"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 1L1 5L5 9"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                  />
                                </svg>
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="children">
                        <div className="postbox__comment-box d-flex">
                          <div className="postbox__comment-info">
                            <div className="postbox__comment-avater mr-20">
                              <img src={authorImg2} alt="" />
                            </div>
                          </div>
                          <div className="postbox__comment-text">
                            <div className="postbox__comment-name d-flex">
                              <h5>Jemil Akthtan</h5>
                              <span className="post-meta"> July 14, 2022</span>
                            </div>
                            <p>
                              Include anecdotal examples of your experience, or
                              things you took notice of that you feel others
                              would find useful.
                            </p>
                            <div className="postbox__comment-reply">
                              <a href="#">
                                <svg
                                  width="12"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 1L1 5L5 9"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                  />
                                </svg>
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="postbox__comment-box d-flex">
                          <div className="postbox__comment-info ">
                            <div className="postbox__comment-avater mr-20">
                              <img src={authorImg3} alt="" />
                            </div>
                          </div>
                          <div className="postbox__comment-text">
                            <div className="postbox__comment-name d-flex">
                              <h5>Justin Case</h5>
                              <span className="post-meta">
                                {' '}
                                April 8, 2022 at 7:38 am
                              </span>
                            </div>
                            <p>
                              Patient Comments are a collection of comments
                              submitted by viewers in <br /> response to a
                              question posed by a MedicineNet doctor.
                            </p>
                            <div className="postbox__comment-reply">
                              <a href="#">
                                <svg
                                  width="12"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 1L1 5L5 9"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                  />
                                </svg>
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="postbox__comment-form wow animate__fadeInUp"
                    data-wow-duration="1.1s"
                  >
                    <h3 className="postbox__comment-form-title">
                      Leave A Comment
                    </h3>
                    <form action="#" className="box">
                      <div className="row gx-20">
                        <div className="col-sm-6">
                          <div className="postbox__contact-input">
                            <input type="text" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="postbox__contact-input">
                            <input type="email" placeholder="Your Email" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="postbox__contact-textarea mb-30">
                            <textarea placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="postbox__comment-agree">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckDefault"
                              >
                                I agree that my submitted data is being
                                collected and stored.
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="postbox__comment-btn">
                            <button
                              type="submit"
                              className="main-btn tp-btn-hover alt-color"
                            >
                              <span>Post comment</span>
                              <b></b>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                 */}
                </article>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <div
                  className="sidebar__widget mb-40 wow animate__fadeInUp"
                  data-wow-duration="1.1s"
                >
                  <NewestPost />
                </div>
                <div
                  className="sidebar__widget mb-40 wow animate__fadeInUp"
                  data-wow-duration="1.1s"
                >
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Categories</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <ul>
                      {category.data.map((cat) => (
                        <li>
                          <Link to={`/blog/${cat.slug}`}>
                            <span>
                              <i className="fal fa-angle-right"></i>
                              {cat.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA />
    </main>
  );
};

export default BlogDetailsMain;
