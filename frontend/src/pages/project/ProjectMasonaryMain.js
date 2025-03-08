import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import SingleProject from '../../components/Project';

import bgImg from '../../assets/img/cta/cta-bg-2.png';
import projectImg1 from '../../assets/img/project/pro-17.jpg';
import projectImg2 from '../../assets/img/project/pro-18.jpg';
import projectImg3 from '../../assets/img/project/pro-19.jpg';
import projectImg4 from '../../assets/img/project/pro-20.jpg';
import projectImg5 from '../../assets/img/project/pro-21.jpg';
import projectImg6 from '../../assets/img/project/pro-22.jpg';
import projectImg7 from '../../assets/img/project/pro-23.jpg';
import projectImg8 from '../../assets/img/project/pro-48.jpg';
import projectImg9 from '../../assets/img/project/pro-49.jpg';
import projectImg10 from '../../assets/img/project/pro-50.jpg';

const ProjectMasonaryMain = () => {
  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    992: 2,
    576: 1,
  };

  let tab1 = 'All',
    tab2 = 'Development',
    tab3 = 'App Design',
    tab4 = 'Branding Design';
  const tabStyle =
    'nav justify-content-center project-2__button-box masonary-menu';

  const [open, setOpen] = useState(false);
  // Handler for image gallery
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <main>
      <Breadcrumb pageTitle="Portfolio Masonary" />

      <>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: projectImg1 },
            { src: projectImg2 },
            { src: projectImg3 },
            { src: projectImg4 },
            { src: projectImg5 },
            { src: projectImg6 },
            { src: projectImg7 },
            { src: projectImg8 },
            { src: projectImg9 },
            { src: projectImg10 },
          ]}
        />

        <div className="project-2__area project-2__plr-3 project-2__space p-relative fix">
          <div className="container-fluid">
            <Tabs>
              <div className="row">
                <div className="col-xl-12">
                  <TabList className={tabStyle}>
                    <Tab>
                      <button>{tab1}</button>
                    </Tab>
                    <Tab>
                      <button>{tab2}</button>
                    </Tab>
                    <Tab>
                      <button>{tab3}</button>
                    </Tab>
                    <Tab>
                      <button>{tab4}</button>
                    </Tab>
                  </TabList>
                </div>
              </div>
              <TabPanel>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div>
                    <SingleProject
                      Image={projectImg1}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg2}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg3}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg4}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg5}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg6}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg10}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg8}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg9}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                </Masonry>
              </TabPanel>
              <TabPanel>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div>
                    <SingleProject
                      Image={projectImg2}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg4}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg5}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg6}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg7}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg1}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg5}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg1}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg1}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                </Masonry>
              </TabPanel>
              <TabPanel>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div>
                    <SingleProject
                      Image={projectImg1}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg2}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg3}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg4}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg5}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg6}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg10}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg8}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg9}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                </Masonry>
              </TabPanel>
              <TabPanel>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div>
                    <SingleProject
                      Image={projectImg2}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg4}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg5}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg6}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg7}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg1}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg5}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg1}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                  <div>
                    <SingleProject
                      Image={projectImg1}
                      Title="Conference On Projects"
                      onClickHandler={handleClick}
                    />
                  </div>
                </Masonry>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </>

      <CTA ctaBG={bgImg} />
    </main>
  );
};

export default ProjectMasonaryMain;
