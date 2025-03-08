import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Fuse from 'fuse.js';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import NewestPost from './NewestPost';

const BlogMain = () => {
  const {slug} = useParams();
  const blogData = useSelector((state) =>
    slug
      ? state.data.blog.data.filter((blog) => blog.category.slug === slug)
      : state.data.blog.data
  ) || [];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedData, setSearchedData] = useState([]); // Doar pentru rezultate căutare
  const [isSearching, setIsSearching] = useState(false);

  const image = process.env.REACT_APP_API_URL_IMAGE;

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;
  const totalPages = Math.ceil(blogData.length / postsPerPage);

  // Resetează pagina curentă dacă blogData se modifică
  useEffect(() => {
    setCurrentPage(1);
  }, [blogData]);

  // Datele postărilor pentru pagina curentă
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return blogData.slice(startIndex, startIndex + postsPerPage);
  }, [blogData, currentPage]);

  const fuse = useMemo(() => {
    return new Fuse(blogData, {
      keys: ['blogTitle'],
      includeScore: true,
      threshold: 0.3, // Sensibilitate căutare
    });
  }, [blogData]);

  const handleSearch = useCallback(
    _.debounce((query) => {
      setIsSearching(false);
      if (query) {
        const results = fuse.search(query).map((result) => result.item);
        setSearchedData(results);
      } else {
        setSearchedData([]); // Resetăm lista dacă nu se caută nimic
      }
    }, 300),
    [fuse]
  );

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setIsSearching(true);
    handleSearch(query);
  };

  return (
    <main>
      <Breadcrumb pageTitle="Blog" />

      <div className="postbox__area pb-100 pt-100">
        <div className="container">
          <div className="row">
            
            {/* Sidebar */}
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                
                {/* Search Bar */}
                <div className="sidebar__widget mb-40">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Search</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                      <div className="sidebar__search-input-2">
                        <input
                          type="text"
                          placeholder="Search your keyword..."
                          value={searchQuery}
                          onChange={handleChange}
                        />
                        <button type="button">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                              d="M8.01371 15.2219C11.9525 15.2219 15.1456 12.0382 15.1456 8.11096C15.1456 4.18368 11.9525 1 8.01371 1C4.07488 1 0.881836 4.18368 0.881836 8.11096C0.881836 12.0382 4.07488 15.2219 8.01371 15.2219Z"
                              stroke="#5F6168"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.9287 16.9996L13.0508 13.1331"
                              stroke="#5F6168"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Rezultate căutare */}
                    {searchQuery && (
                      <>
                        {isSearching ? (
                          <p>Searching...</p>
                        ) : searchedData.length > 0 ? (
                          searchedData.map((item, i) => (
                            <div className="rc__post mb-20 d-flex" key={i}>
                              <div className="rc__post-thumb mr-20">
                                <Link to={`/blog-details/${item.slug}`}>
                                  <img src={`${image}${item.blogImage?.formats?.thumbnail?.url}`} alt="" />
                                </Link>
                              </div>
                              <div className="rc__post-content">
                                <h3 className="rc__post-title">
                                  <Link to={`/blog-details/${item.slug}`}>{item.blogTitle}</Link>
                                </h3>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p>No results found</p>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Postări Recente */}
                <div className="sidebar__widget mb-40">
                  <NewestPost />
                </div>
              </div>
            </div>

            {/* Lista de articole */}
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div id="blog" className="postbox__wrapper pr-20">
                {blogData.length === 0 ? (
                  <p>No blog posts available</p>
                ) : (
                  paginatedData.map((blog) => (
                    <article className="postbox__item format-image mb-50 transition-3" key={blog.id}>
                      <div className="postbox__thumb w-img">
                        <Link to={`/blog-details/${blog.slug}`}>
                          <img src={`${image}${blog.blogImage?.url}`} alt="" />
                        </Link>
                      </div>
                      <div className="postbox__content">
                        <div className="postbox__meta">
                          <span>
                            <Link to={`/about-me/${blog.author?.slug}`}>{blog.author?.firstName}</Link>
                          </span>
                          <span>
                            <Link to="#">{blog.creatAt}</Link>
                          </span>
                        </div>
                        <h3 className="postbox__title">
                          <Link to={`/blog-details/${blog.slug}`}>{blog.blogTitle}</Link>
                        </h3>
                        <div className="postbox__text">
                          <p>{blog.shortDescription}</p>
                        </div>
                      </div>
                    </article>
                  ))
                )}



                {/* Pagination Dinamică */}
                {blogData.length > postsPerPage && (
                  <div
                    className="basic-pagination wow animate__fadeInUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".9s"
                  >
                    <nav>
                      <ul>
                        <li>
                          <button
                            type="button"
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                            disabled={currentPage === 1}
                          >
                            <i className="far fa-angle-left"></i>
                          </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, index) => {
                          const pageNumber = index + 1;
                          return (
                            <li key={pageNumber}>
                              <button
                                type="button"
                                className={currentPage === pageNumber ? 'current' : ''}
                                onClick={() => setCurrentPage(pageNumber)}
                              >
                                {pageNumber}
                              </button>
                            </li>
                          );
                        })}
                        <li>
                          <button
                            type="button"
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            disabled={currentPage === totalPages}
                          >
                            <i className="far fa-angle-right"></i>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </main>
  );
};

export default BlogMain;
