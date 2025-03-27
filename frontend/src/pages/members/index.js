import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Team from '../about/TeamSection';
import Breadcrumb from '../../components/Breadcrumb';
import Contact from '../../components/Contact';

const About = () => {
  return (
    <>
      <Header
        parentMenu="about"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
        <Breadcrumb pageTitle="Members" />
          <Team />
          <Contact />
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default About;
