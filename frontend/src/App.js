import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'animate.css/animate.min.css';
import { WOW } from 'wowjs';

// Custom Components
import Home from './pages/home';
import About from './pages/about';
import AboutMe from './pages/about/about-me';
import Service from './pages/service';
import ServiceDetails from './pages/service/service-details';
import Project from './pages/project';
import ProjectOne from './pages/project/project-1';
import ProjectTwo from './pages/project/project-2';
import ProjectMasonary from './pages/project/project-masonary';
import ProjectDetails from './pages/project/project-details';
import Testimonial from './pages/testimonial';
import Error from './pages/error';
import Blog from './pages/blog';
import BlogDetails from './pages/blog/blog-details';
import Contact from './pages/contact';

import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollTop';
import LoadTop from './components/ScrollTop/LoadTop';
import useGetData from './hooks/useGetData';

const App = () => {
  const home = process.env.REACT_APP_API_URL_HOME;
  const services = process.env.REACT_APP_API_URL_SERVICES;
  const blog = process.env.REACT_APP_API_URL_BLOG_POSTS;
  const members = process.env.REACT_APP_API_URL_MEMBERS;
  const categories = process.env.REACT_APP_API_URL_CATEGORIES;

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Apelăm useGetData direct în componentă
  const dataLoadedHome = useGetData(home, "home"); 
  const dataLoadedServices = useGetData(services, "services");
  const dataLoadedMembers = useGetData(members, "members");
  const dataLoadedBlog = useGetData(blog, "blog");
  const dataLoadedCategory = useGetData(categories, "categories");


  useEffect(() => {
    if (dataLoadedHome && 
      dataLoadedServices && 
      dataLoadedBlog && 
      dataLoadedMembers && 
      dataLoadedCategory) {
      setIsLoading(false);
    }
  }, [dataLoadedHome, dataLoadedServices, dataLoadedBlog, dataLoadedMembers, dataLoadedCategory]);

  // Initialize wowjs and animate.css
  useEffect(() => {
    new WOW({ live: false, animateClass: 'animate__animated' }).init();
  }, [location]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      <ScrollToTop />
      <LoadTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-me/:slug" element={<AboutMe />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details/:slug" element={<ServiceDetails />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project-1" element={<ProjectOne />} />
        <Route path="/project-2" element={<ProjectTwo />} />
        <Route path="/project-masonary" element={<ProjectMasonary />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/blog-details/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;