import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "Andrews Osei",
      img: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/294043662_774899340203303_4556735505334631743_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH5qX23rkKDkntfnxNu5q3yoWMiquseR2OhYyKq6x5HY8fPW10aStOPulCnqXNWlsq9V3DcHKT1qnedpOD1hn7x&_nc_ohc=D4Xc5KH5v4wAX9BW2C5&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&oh=00_AfCaVDy2pgxIrbtSN8KMk0xGuQtVr5T7RgscgvyQ_f-zpw&oe=63D7598F",
    },
    {
      id: 2,
      name: "Racks Stellar",
      img: "https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-9/87958132_236789767347599_7101898672144646144_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF_E-EUGAy8gEgeQN857mWxZBU-uTzk5o1kFT65POTmjTnex_BQfmiWY9mDYHNXQjX75LFpQReHTvnId_oMBUrN&_nc_ohc=mPew0L5EqvsAX_Omt5R&_nc_ht=scontent.facc6-1.fna&oh=00_AfD8hkiIcMnx9t1WAqUNP3kTPmYPxWU4VRxOdAvsdryPsg&oe=63F9CC74",
    },
    {
      id: 3,
      name: "Khendi Beatz",
      img: "https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-9/165611305_487189872307586_7498841234928781790_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHSHzM6fyEfiRM-17FHsU4BkCU3H-XQ82iQJTcf5dDzaIuFmS1yj1775Dhu-Fzrve8rLuNO0rsAeoFcKswY-yBB&_nc_ohc=uKaUxvrwH30AX96C2M-&tn=yBqvJZYFTyKAUH41&_nc_ht=scontent.facc6-1.fna&oh=00_AfBGHUL2lnMXhqzqCiTPtwsdfMKIPEhfCVXABsLx2EfyQg&oe=63F99CFB",
    },
    {
      id: 4,
      name: "Yali Nation",
      img: "https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-9/93812411_271483270544915_7802617363806814208_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFq87iU27uzF4e8cUfijyZm2RTycyKlroHZFPJzIqWugaX2M_XONDjc8yL7hohGlnMWFaOLw-iMFcPs5wW9ocwJ&_nc_ohc=tffiCLMFZ6IAX_9xOJn&tn=yBqvJZYFTyKAUH41&_nc_ht=scontent.facc6-1.fna&oh=00_AfApBcO0QI4glKRicyJK7dG2zctfrJEw-aRw9D1DE9Of1Q&oe=63F99B6F",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img alt="" src={currentUser.profilePic} />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story">
          <img alt="" src={story.img} key={story.id} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
