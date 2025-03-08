import React from "react";
import SingleService from "../../components/Service";
import Breadcrumb from "../../components/Breadcrumb";
import CTA from "../../components/CTA";

import serviceIconBg from "../../assets/img/service/sv-icon-shape-7.png";

import { useSelector } from "react-redux";

const ServiceMain = () => {
  const services = useSelector((state) => state.data.services);

  return (
    <main>
      <Breadcrumb pageTitle="Services" />

      <div className="service__area service__plr mt-100 mb-20 p-relative">
        <div className="container-fluid">
          <div className="row">
            {services.data.map((service) => (
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
                  btnURL={`service-details/${service.slug}`}
                  btnText="Read More"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </main>
  );
};

export default ServiceMain;
