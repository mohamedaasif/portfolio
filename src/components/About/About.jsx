import styles from "../../styles/About/About.module.scss";
import svg from "../../image/undraw_Code_thinking_re_gka2.svg";
const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.introContainer}>
          <div className={styles.title}>
            <img src={svg} alt="" />
            <p>Mohamed Aasif — Web Designer & Developer</p>
          </div>
          <div className={styles.about}>
            <p>
              After graduating in 2019 with a Bachelor’s Degree in Information
              Technology, I spent the last two years working both as a freelance
              web developer and designer and as part of a team in various
              companies across India. I acquired project and time management
              skills, as well as the ability to communicate with team members
              and clients while effectively meeting milestones and deadlines.
            </p>
            <p>
              I have worked on a web projects for a range of clients providing
              Web Development (REACT, ANGULAR, HTML, CSS, JS, Bootstrap,
              Material UI, Responsive Layouts), eCommerce Solutions and
              Corporate Branding.
            </p>
            <p>
              I am currently working as a freelancer. I am
              always available to discuss your project over the phone or via
              Skype. These days I enjoy spending my free time playing soccer,
              reading books and gaming.
            </p>
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <div className={styles.skills}>
            <div className={styles.icon}>
              <i class="fas fa-pencil-ruler"></i>
            </div>
            <h3>Designer</h3>
            <p>
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>

            <div className={styles.tech}>
              <p>Things I enjoy designing:</p>
              <p>UX, UI, Web, Mobile, Apps.</p>
            </div>
            <div className={styles.tools}>
              <p>Design Tools:</p>
              <p>Figma</p>
              <p>Sketch</p>
              <p>Pen & Paper</p>
            </div>
          </div>
          <hr />
          <div className={styles.skills}>
            <div className={styles.icon}>
              <i class="fas fa-code"></i>
            </div>
            <h3>Front-end Development</h3>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <div className={styles.tech}>
              <p>Languages I know:</p>
              <p>HTML, CSS, Sass, JS, React, Angular.</p>
            </div>
            <div className={styles.tools}>
              <p>Dev Tools:</p>
              <p>VS Code</p>
              <p>Bootstrap</p>
              <p>Material UI</p>
              <p>Github</p>
              <p>Stackblitz</p>
            </div>
          </div>
          <hr />
          <div className={styles.skills}>
            <div className={styles.icon}>
              <i class="fas fa-database"></i>
            </div>
            <h3>Back-end Development</h3>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <div className={styles.tech}>
              <p>Languages I know:</p>
              <p>Express, Node.js, Mysql, Spring Boot.</p>
            </div>
            <div className={styles.tools}>
              <p>Dev Tools:</p>
              <p>VS Code</p>
              <p>Eclipse</p>
              <p>Github</p>
              <p>Stackblitz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
