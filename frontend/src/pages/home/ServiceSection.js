import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import SingleService from "../../components/Service";
import { Link } from "react-router-dom";
import shapeImg1 from "../../assets/img/service/sv-shape-1.png";
import shapeImg2 from "../../assets/img/service/sv-shape-2.png";
import serviceIconBg from "../../assets/img/service/sv-icon-shape-7.png";

const Service = () => {
  const homeData = useSelector((state) => state.data.home);
  const services = useSelector((state) => state.data.services);
  const service = services.data.slice(0, 3);

  return (
    <div className="service__area service__space service__mlr grey-bg pt-195 pb-70 p-relative">
      <div className="service__shape-1">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="service__shape-2">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInUp"
            data-wow-duration="1.1s"
          >
            <SectionTitle
              sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
              subTitle={homeData.data[0].servicePill}
              Title={homeData.data[0].serviceTitle}
            />
          </div>
        </div>

        {/* Aici porneste grila de servicii */}

        <div className="row">
          {/* //////////////////////////////////////////////////////////////////////// */}

          {service.map((service) => {
            return (
              <div
                key={service.id}
                className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <SingleService
                  itemClass="service__item service__item-bg p-relative fix shape-none"
                  btnClass="service__link service__link-color-1"
                  titleClass="service__title color-1"
                  descClass="text-white
                    "
                  serviceIcon="fal fa-plug"
                  serviceIconBg={serviceIconBg}
                  Title={service.title}
                  Description={service.shortDescription}
                  btnText="Read More"
                />
              </div>
            );
          })}

          <div
            className="service__section-box text-center pb-35 section-title-fixed-width"
            data-wow-duration="1.1s"
            data-wow-delay=".5s"
          >
            <Link to="/service" className="main-btn tp-btn-hover alt-color">
              <span>All services</span>
              <b></b>
            </Link>
          </div>
          {/* //////////////////////////////////////////////////////////////////////// */}
        </div>
      </div>
    </div>
  );
};

export default Service;
