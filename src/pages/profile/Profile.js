import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/271386234_656546368705268_648385655784431971_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFy3vFgiLT0-pX_CeG28UVcJicGv1qHsR4mJwa_WoexHj1y1Jyur8Yv2NC4GVHAtgC-6vnl_1Q5zPpOcqz7FpXJ&_nc_ohc=A-SqZR4ceCYAX8SYQo7&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&oh=00_AfCRlL5kpUJzNcNiNxsWMegN0Raez9bY1ksysormu9k0hw&oe=63D7FE50"
          alt=""
          className="cover"
        />
        <img
          src="https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-9/165611305_487189872307586_7498841234928781790_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHSHzM6fyEfiRM-17FHsU4BkCU3H-XQ82iQJTcf5dDzaIuFmS1yj1775Dhu-Fzrve8rLuNO0rsAeoFcKswY-yBB&_nc_ohc=uKaUxvrwH30AX96C2M-&tn=yBqvJZYFTyKAUH41&_nc_ht=scontent.facc6-1.fna&oh=00_AfBGHUL2lnMXhqzqCiTPtwsdfMKIPEhfCVXABsLx2EfyQg&oe=63F99CFB"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="small" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="small" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="small" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="small" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="small" />
            </a>
          </div>
          <div className="center">
            <span>Andrews Osei</span>
            <div className="info">
              <div className="item">
                <PlaceIcon fontSize="small" />
                <span>Ghana</span>
              </div>
              <div className="item">
                <LanguageIcon fontSize="small" />
                <span>andrewsosei.com</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon fontSize="small" />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
