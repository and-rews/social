import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallary from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              alt=""
              src="https://media.licdn.com/dms/image/C4D03AQFiVmgBapGldg/profile-displayphoto-shrink_800_800/0/1615849381181?e=2147483647&v=beta&t=W9cb-7GNnPdTwsoYelCeOLOaRsLj9skkb8RYy91MK6s"
            />
            <span>Andrews</span>
          </div>
          <div className="item">
            <img alt="" src={Friends} />
            <span>Friends</span>
          </div>
          <div className="item">
            <img alt="" src={Groups} />
            <span>Groups</span>
          </div>
          <div className="item">
            <img alt="" src={Market} />
            <span>Market Place</span>
          </div>
          <div className="item">
            <img alt="" src={Watch} />
            <span>Watch</span>
          </div>
          <div className="item">
            <img alt="" src={Memories} />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img alt="" src={Events} />
            <span>Events</span>
          </div>
          <div className="item">
            <img alt="" src={Gaming} />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img alt="" src={Gallary} />
            <span>Gallary</span>
          </div>
          <div className="item">
            <img alt="" src={Videos} />
            <span>Videos</span>
          </div>
          <div className="item">
            <img alt="" src={Messages} />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img alt="" src={Tutorials} />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img alt="" src={Courses} />
            <span>Courses</span>
          </div>
          <div className="item">
            <img alt="" src={Fund} />
            <span>Fund</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
