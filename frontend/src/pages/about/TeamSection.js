import React  from 'react';
import { useSelector } from 'react-redux';
import SingleTeam from '../../components/Team';


const Team = () => {
  const teamData = useSelector((state) => state.data.members);
  const image = process.env.REACT_APP_API_URL_IMAGE;

  return (
    <div className="team__area team__space-2 team__plr grey-bg">
      <div className="container-fluid">
        <div className="row align-items-end justify-content-center mb-60">
          <div className="col-xl-12 col-lg-6 col-md-9 col-sm-10">
            <div className="feature__section-box text-center">
              <h4
                className="section-blue-subtitle title-anim wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
              Team Member
              </h4>
              <h3
                className="section-title title-anim wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                The Team That Drives Success.
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
      {teamData.data.map((member) => (  
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
            key={member.documentId} 
          >
            <SingleTeam
              Image={`${image}${member?.profiePhoto?.url}`}
              Name={`${member.firstName} ${member.lastName}`}
              Title={member.shortDescription}
              GitHub={member.gitHub}
              LinkedIn={member.linkedIn}
              Slug={member.slug}
            />
          </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default Team;
