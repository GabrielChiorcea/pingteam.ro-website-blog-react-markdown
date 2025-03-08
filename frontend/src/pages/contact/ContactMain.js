import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

import Contact from '../../components/Contact';

const ContactMain = () => {
  return (
    <main>
      <Breadcrumb pageTitle="Contact" />

      <Contact/>

    </main>
  );
};

export default ContactMain;
