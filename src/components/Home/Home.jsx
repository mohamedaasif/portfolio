import svg from "../../image/undraw_coding_6mjf.svg"
import styles from "../../styles/Home/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
    
      <div className={styles.container}>
        <div className={styles.introduction}>
          <h1>Mohamed Aasif</h1>
          <p>
            Hello, I am a Freelance Web Designer & Developer based in TamilNadu,
            India. I help designers, small agencies and businesses bring their
            ideas to life.
          </p>
          <p>"I know how to google and solve problems."</p>
        </div>
        <div className={styles.imgContainer}>
          <img src={svg} alt="" className={styles.avatar}/>  
        </div>
      </div>
    </div>
  );
};

export default Home;
