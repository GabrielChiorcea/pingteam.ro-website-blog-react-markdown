import React, { useRef, useState } from 'react';

const Contact = (props) => {
  const { itemClass } = props;
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const token = process.env.REACT_APP_TOKEN_KEY;
  const contact = process.env.REACT_APP_API_URL_CONTACT;


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construiește obiectul de date din formular
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch(`${contact}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const resData = await response.json();
      console.log('SUCCESS!', resData);
      setStatus('The message was sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('An error occurred while sending the message.');
    }
  };

  return (
    <div
      className={
        itemClass ? itemClass : 'contact__area contact__plr p-relative fix'
      }
    >
      {/* ... alte elemente de layout și imagini ... */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-7">
            <div className="contact__section-title pb-10">
              <h4 className="section-subtitle char-anim">Get In Contact</h4>
              <h3 className="section-title char-anim">
                Feel free to get in touch <br />
                Contact with us.
              </h3>
            </div>
            <div
              className="contact__form wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="postbox__contact-input">
                      <input name="name" type="text" placeholder="Your Name" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="postbox__contact-input">
                      <input name="email" type="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="postbox__contact-textarea">
                      <textarea name="message" placeholder="Message" required></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="main-btn-sm tp-btn-hover alt-color">
                  <span>Send</span>
                  <b></b>
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
          {status && <p>{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
