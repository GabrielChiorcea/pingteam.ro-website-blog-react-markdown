import "github-markdown-css";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SocialFeed from "../../components/SocialFeed";
import Breadcrumb from "../../components/Breadcrumb";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import aboutImg from "../../assets/img/about/about-1.jpg";
import CTA from "../../components/CTA";

const HomeMain = () => {
  const { slug } = useParams();
  const member = useSelector((state) =>
    state.data.members.data.find((member) => member.slug === slug)
  );
  const image = process.env.REACT_APP_API_URL_IMAGE;

  return (
    <main>
      <Breadcrumb pageTitle="About Me" />

      <div className="about-5__area about-5__plr">
        <div className="container-fluid">
          <div className="about-5__border">
            <div className="row align-items-center">
              <div
                className="col-xl-5 col-lg-5 text-center wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="about-5__main-img text-center text-lg-start">
                  <img
                    className="about-5__img"
                    src={`${image}${member.profiePhoto.url}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="about-5__content-box">
                  <h4
                    className="about-5__content-title wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    {member.firstName} {member.lastName}
                  </h4>
                  <div className="about-5__content">
                    <div
                      className="about-5__text wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".6s"
                    >
                      <p>{member.longDescription}</p>
                    </div>
                    <h6 className="section-title char-anim tpfadeUp">
                      <i>The technologies I work with</i>
                    </h6>
                    <div
                      className="about-5__content-list wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".7s"
                    >
                      <ul>
                        {member.technologies.map((technology) => (
                          <li key={technology.id}>
                            <i className="fal fa-check-circle"></i>
                            <span>{technology.technology}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social__area social__plr-2 p-relative z-index">
                <div className="container-fluid">
                  <SocialFeed
                    linkedInlink={member.linkedIn}
                    githublink={member.gitHub}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-details__area about-details__plr">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="about-details__content">
                <h4 className="about-details__title">Personal Awards:</h4>
                <div className="about-details__text">
                  <p>
                    Business tailored it design, management & support services
                    business agency elit, sed do eiusmod tempor.{' '}
                  </p>
                </div>
                <div className="about-details__content-list">
                  <ul>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>
                        Business sagittis aliquaenim minim veniam leo.
                      </span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>We give management agency service. </span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>
                        Business sagittis aliquaenim minim veniam leo.
                      </span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>
                        Bacteria Markers sagittis aliquaenim minim venia.
                      </span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>Nam nec mi euismod minim veniam leo.</span>
                    </li>
                    <li>
                      <i className="fal fa-check-square"></i>
                      <span>We sagittis aliquaenim minim veniam leo.</span>
                    </li>
                  </ul>
                </div>
                <div className="about-details__text">
                  <p>
                    Business tailored it design, management & support services
                    business agency elit, sed do eiusmod tempor.{' '}
                  </p>
                </div>
              </div>

            </div> */}

            {/* <div className="col-xl-12"
              <div
                className="about-details__text-2 pt-50 wow tpfadeUp markdown-body"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{member.work}</ReactMarkdown>
              </div>
            </div> */}
            <div
              className="postbox__details-title-box pb-30 wow animate__fadeInUp markdown-body"
              data-wow-duration="1.1s"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {member.work}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </main>
  );
};

export default HomeMain;
