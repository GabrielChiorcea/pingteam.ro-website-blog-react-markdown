import { Link } from "react-router-dom";

import teamImg from "../../assets/img/team/user_placeholder.png";

const SingleTeam = (props) => {
  const { itemClass, Image, Name, Title, Slug, GitHub, LinkedIn } = props;
  return (
    <div className={itemClass ? itemClass : "team__item text-center"}>
      <div className="team__main-thumb">
        <img src={Image ? Image : teamImg} alt={Title} />
        <div className="team__social-box">
          <a href={GitHub}>
            <i className="fab fa-github"></i>
          </a>
          <a href={LinkedIn}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="team__author-info">
        <h5 className="team__author-name">
          <Link to={`/about-me/${Slug}`}>
            {Name ? Name : "Gabriel Chiorcea"}
          </Link>
        </h5>
        <span>{Title ? Title : "Founder"}</span>
      </div>
    </div>
  );
};

export default SingleTeam;
