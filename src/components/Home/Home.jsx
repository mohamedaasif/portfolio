import avatar from "../../image/avatar-rbg.png";
import styles from "../../styles/Home/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.introduction}>
          <h1>Mohamed Aasif</h1>
          <p>
            Hi. I am MERN Stack{" "}
            <span>
              (<s>MongoDB</s> MySql, Express, React, Node)
            </span>{" "}
            Developer based in Kanyakumari, TN. I specialize in creating
            software for clients ranging from individuals and small-businesses
            all the way to large enterprise corporations.
          </p>
          <p>
            "I design and code beautifully simple things, and I love what I do."
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
