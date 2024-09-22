import { Box, Typography } from "@mui/material";
import styles from "./Home.module.scss";
import avatar from "../../assets/avatar-rbg.png";

const Home = () => {
  return (
    <Box className={styles.homeContainer}>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "var(--primary-main)",
            fontFamily: "var(--ff-bold)",
            fontSize: "36px",
            mb: "24px",
          }}
        >
          Full Stack Developer | React, Node.js, MongoDB.
        </Typography>
        <Typography
          sx={{
            color: "var(--text-grey-500)",
            fontFamily: "var(--ff-medium)",
            fontSize: "18px",
            mb: "24px ",
          }}
        >
          Welcome to my portfolio! I am a passionate Full Stack Developer with
          expertise in building dynamic and responsive web applications.
          Proficient in JavaScript, React, Node.js, and MongoDB, I specialize in
          both front-end and back-end development. I have experience in crafting
          RESTful APIs and integrating third-party services, ensuring seamless
          user experiences. With a strong focus on clean code, performance
          optimization, and modern development practices, I aim to deliver
          scalable solutions that meet client needs. Explore my projects to see
          how I can help bring your ideas to life!
        </Typography>
      </Box>
      <Box
        component="img"
        className={styles.img}
        src={avatar}
        alt="avatar"
        width="200x"
        height="200px"
      />
    </Box>
  );
};

export default Home;
