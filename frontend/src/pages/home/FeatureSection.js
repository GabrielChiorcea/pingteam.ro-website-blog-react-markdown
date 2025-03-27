import React, { useState, useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle';
import SingleFeature from '../../components/Feature';

import { useSelector } from 'react-redux';

const Feature = () => {
  const [featureimg, setFeatureimg] = useState([]);
  const homeData = useSelector((state) => state.data.home);
  const servicesField = useSelector((state) => state.data.servicesField);
  const image = process.env.REACT_APP_API_URL_IMAGE;
  console.log(servicesField);

  useEffect(() => {

    const getImg = async () => {
      const token = process.env.REACT_APP_TOKEN_KEY;
      const url = process.env.REACT_APP_API_URL_HOME_FUTURE_IMAGE;
    try {
      const response = await fetch(url,{
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json();
        if (data && data.data) {
          setFeatureimg(data.data[0].featureItem);
        } else {
          console.log('Error: No data found');
        }
      }
    } catch (error) {
      console.log('Error: ', error);
      
    }
  }
  getImg();

  }, []);

  return (
    <div className="feature__area feature__mlr pt-100 pb-70">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-xl-6 wow animate__fadeInUp"
            data-wow-duration="1.1s"
          >
            <SectionTitle 
            subTitle={homeData?.data[0]?.featurePill}
            Title={homeData?.data[0]?.featureTitle}
            />

          </div>
        </div>
        <div className="row">
          {servicesField.data.map((feature, index) => (
            <div
            key={index}
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".5s"x
          >
            <SingleFeature
              itemClass={`feature__item feature__color-${index + 1}  text-center`}
              Image={`${image}${feature.image.url}`}
              Title={feature.serviceField}
              Description={feature.serviceFieldDescription}
              btnText="See More"
              btnURL={`/service/${feature.serviceField}`}
            />
              </div>
            ))}


        </div>
      </div>
    </div>
  );
};

export default Feature;
