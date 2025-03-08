import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuItems = (props) => {
  const { parentMenu } = props;

  const location = useLocation();

  // const [home, setHome] = useState(false);
  // const [about, setAbout] = useState(false);
  // const [service, setService] = useState(false);
  // const [page, setPage] = useState(false);
  // const [blog, setBlog] = useState(false);

  // const openMobileMenu = (menu) => {
  //   if (menu === 'home') {
  //     setHome(!home);
  //     setAbout(false);
  //     setService(false);
  //     setPage(false);
  //     setBlog(false);
  //   } else if (menu === 'about') {
  //     setHome(false);
  //     setAbout(!about);
  //     setService(false);
  //     setPage(false);
  //     setBlog(false);
  //   } else if (menu === 'service') {
  //     setHome(false);
  //     setAbout(false);
  //     setService(!service);
  //     setPage(false);
  //     setBlog(false);
  //   } else if (menu === 'page') {
  //     setHome(false);
  //     setAbout(false);
  //     setService(false);
  //     setPage(!page);
  //     setBlog(false);
  //   } else if (menu === 'blog') {
  //     setHome(false);
  //     setAbout(false);
  //     setService(false);
  //     setPage(false);
  //     setBlog(!blog);
  //   }
  // };

  return (
    <>
      <li
        className={
          parentMenu === 'home' ? 'has-dropdown active' : 'has-dropdown'
        }
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className={
          parentMenu === 'about' ? 'has-dropdown active' : 'has-dropdown'
        }
      >
        <Link to="/about-us">About</Link>
      </li>
      <li
        className={
          parentMenu === 'service' ? 'has-dropdown active' : 'has-dropdown'
        }
      >
        <Link to="/service">Service</Link>
      </li>
      <li
        className={
          parentMenu === 'page' ? 'has-dropdown active' : 'has-dropdown'
        }
      >
        <Link to="/blog">Blog</Link>
      </li>
      <li className={location.pathname === '/contact' ? 'active' : ''}>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
};

export default MenuItems;
