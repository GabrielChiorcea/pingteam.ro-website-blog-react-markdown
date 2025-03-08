import "github-markdown-css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import React from "react";
import CTA from "../../components/CTA";
import Breadcrumb from "../../components/Breadcrumb";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ServiceDetailsMain = () => {
  const { slug } = useParams();
  const services = useSelector((state) => state.data.services);
  const service = services.data.find((service) => service.slug === slug);

  return (
    <main>
      <Breadcrumb pageTitle="Service Details" />

      <div className="service-details__area service-details__plr mt-110 mb-30">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-8 col-lg-7 wow animate__fadeInLeft"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <h4
                className="section-subtitle char-anim wow animate__fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay=".3s"
              >
                The Professional Linux Group of Romania
              </h4>
              <h3
                className="hero-title char-anim wow animate__fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay=".3s"
              >
                {service.title}
              </h3>
            </div>
            <div
              className="col-xl-4 col-lg-5 wow animate__fadeInRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="service-details__service-item">
                <h4>What you get</h4>
                <ul>
                  {service.serviceStrongPoints.map((point, index) => (
                    <li key={index}>{point.serviceStrongPoint}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div
                className="service-details__item pt-40 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="service-details__text markdown-body">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {service.content}
                  </ReactMarkdown>
                </div>

                {/* 
                 <div
                  className="service-details__list wow animate__fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".9s"
                >
                  <ul>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Great Depression.</span>
                    </li>
                  </ul>
                </div>  */}
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="service-details__section-box">
                <h4 className="section-title">
                  Frequently asked questions about the service
                </h4>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            ></div>
            <div className="col-xl-12 col-lg-12 mb-30">
              <div className={"it-custom-accordion"}>
                <Accordion className="accordion" preExpanded={["a"]}>
                  {service.fqa.questionAndAnswer.map((fqa, index) => {
                    const uuid = index === 0 ? "a" : `b${index}`;
                    return (
                      <AccordionItem
                        key={index}
                        className="accordion-items"
                        uuid={uuid}
                      >
                        <AccordionItemHeading>
                          <AccordionItemButton className="accordion-buttons">
                            <span>
                              <i className="fal fa-check"></i>
                            </span>{" "}
                            {fqa.question}
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-body">
                          <p>{fqa.answer}</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA />
    </main>
  );
};

export default ServiceDetailsMain;
