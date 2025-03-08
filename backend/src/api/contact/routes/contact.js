// src/api/contact/routes/contact.js
module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact',
      handler: 'contact.sendEmail',
      config: {
        auth: false, // setează autentificarea dacă este necesar
      },
    },
  ],
};
