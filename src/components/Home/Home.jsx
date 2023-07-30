import avatar from "../../image/avatar-rbg.png";
import styles from "../../styles/Home/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.introduction}>
          <h1>Mohamed Aasif</h1>
          <p>
            I am ReactJS / Front End Developer. I specialize in creating
            software for clients ranging from individuals and small-businesses
            all the way to large enterprise corporations.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src={avatar} alt="" className={styles.avatar} />
        </div>
      </div>
    </div>
  );
};

export default Home;
