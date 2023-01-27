import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const liked = false;

  const posts = [
    {
      id: 1,
      name: "Andrews Osei",
      userId: 1,
      profilePic:
        "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/294043662_774899340203303_4556735505334631743_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH5qX23rkKDkntfnxNu5q3yoWMiquseR2OhYyKq6x5HY8fPW10aStOPulCnqXNWlsq9V3DcHKT1qnedpOD1hn7x&_nc_ohc=D4Xc5KH5v4wAX9BW2C5&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&oh=00_AfCaVDy2pgxIrbtSN8KMk0xGuQtVr5T7RgscgvyQ_f-zpw&oe=63D7598F",

      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/294043662_774899340203303_4556735505334631743_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH5qX23rkKDkntfnxNu5q3yoWMiquseR2OhYyKq6x5HY8fPW10aStOPulCnqXNWlsq9V3DcHKT1qnedpOD1hn7x&_nc_ohc=D4Xc5KH5v4wAX9BW2C5&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&oh=00_AfCaVDy2pgxIrbtSN8KMk0xGuQtVr5T7RgscgvyQ_f-zpw&oe=63D7598F",
    },
    {
      id: 2,
      name: "Osei Agyemang",
      userId: 2,
      profilePic:
        "https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-9/99127103_290154565344452_6415470032460972032_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEPK3GAQkJheSH_N55mJmDDADW88bYq4UIANbzxtirhQtoIMOEOb2WMLw5MJMCobfSmuVGnImjz_AzHFwBpzNI9&_nc_ohc=YfIit-OSxjcAX-QdbqA&_nc_ht=scontent.facc6-1.fna&oh=00_AfCMbowZ63P-Ck8j9M8_vRUGBSa7P-FEZa2K3_bXBv_FYw&oe=63FA7F69",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      name: "Racks Stellar",
      userId: 3,
      profilePic:
        "https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-9/82990215_213860922973817_4357122752742686720_n.jpg?stp=c0.17.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEBKjY9aNCKzebHZsCT908erASvgeTZumysBK-B5Nm6bIWcUaA1VufLIb3LHelF_VUGtheVcQulI6pAGeJxuwwA&_nc_ohc=XnD4K33dlFwAX_23YZp&tn=yBqvJZYFTyKAUH41&_nc_ht=scontent.facc6-1.fna&oh=00_AfCsanHmGRtrT0574-jvOPc-boCHSrakG1YtRplO6Pit4w&oe=63FA5FDA",
      desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      img: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/271386234_656546368705268_648385655784431971_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFy3vFgiLT0-pX_CeG28UVcJicGv1qHsR4mJwa_WoexHj1y1Jyur8Yv2NC4GVHAtgC-6vnl_1Q5zPpOcqz7FpXJ&_nc_ohc=A-SqZR4ceCYAX8SYQo7&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&oh=00_AfCRlL5kpUJzNcNiNxsWMegN0Raez9bY1ksysormu9k0hw&oe=63D7FE50",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
