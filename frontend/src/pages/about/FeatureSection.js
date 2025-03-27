import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import featureIcon1 from "../../assets/img/feature/fea-icon-1.png";
import featureIcon2 from "../../assets/img/feature/fea-icon-2.png";
import featureIcon3 from "../../assets/img/feature/fea-icon-3.png";
import featureIcon4 from "../../assets/img/feature/fea-icon-4.png";
import featureIcon5 from "../../assets/img/feature/fea-icon-5.png";

const Feature = () => {
  const [services, setServices] = useState([]);

  const api = process.env.REACT_APP_API_URL_SERVICES_FIELD;
  const token = process.env.REACT_APP_TOKEN_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setServices(data);
        } else {
          console.log("Error: ", response.statusText);
        }
      }
      catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchData();
  }, []);

  console.log(services);

  return (
    <div className="feature-2__area feature-2__mlr z-index-5 pb-60">
      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-md-5">
          {services.map((service) => (
            <Link to="/about">
              <div
                className="col mb-40 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="feature-2__item text-center">
                  <div className="feature-2__item-overly"></div>
                  <div className="feature-2__icon feature-2__icon-color-1 z-index">
                    <span>
                      <img src={featureIcon1} alt="Development" />
                    </span>
                  </div>
                  <div className="feature-2__text z-index">
                    <h4 className="feature-2__title-sm">Development</h4>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* 
          <div
            className="col mb-40 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="feature-2__item text-center">
              <div className="feature-2__item-overly"></div>
              <div className="feature-2__icon feature-2__icon-color-2 z-index">
                <span>
                  <img src={featureIcon2} alt="Marketing" />
                </span>
              </div>
              <div className="feature-2__text z-index">
                <h4 className="feature-2__title-sm">Marketing</h4>
              </div>
            </div>
          </div>
          <div
            className="col mb-40 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="feature-2__item text-center">
              <div className="feature-2__item-overly"></div>
              <div className="feature-2__icon feature-2__icon-color-3 z-index">
                <span>
                  <img src={featureIcon3} alt="Promoting" />
                </span>
              </div>
              <div className="feature-2__text z-index">
                <h4 className="feature-2__title-sm">Promoting</h4>
              </div>
            </div>
          </div>
          <div
            className="col mb-40 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".8s"
          >
            <div className="feature-2__item text-center">
              <div className="feature-2__item-overly"></div>
              <div className="feature-2__icon feature-2__icon-color-4 z-index">
                <span>
                  <img src={featureIcon4} alt="Optimization" />
                </span>
              </div>
              <div className="feature-2__text z-index">
                <h4 className="feature-2__title-sm">Optimization</h4>
              </div>
            </div>
          </div>
          <div
            className="col mb-40 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".9s"
          >
            <div className="feature-2__item text-center">
              <div className="feature-2__item-overly"></div>
              <div className="feature-2__icon feature-2__icon-color-5 z-index">
                <span>
                  <img src={featureIcon5} alt="Discovery" />
                </span>
              </div>
              <div className="feature-2__text z-index">
                <h4 className="feature-2__title-sm">Discovery</h4>
              </div>
            </div>
          </div>
           */}
        </div>
      </div>
    </div>
  );
};

export default Feature;
