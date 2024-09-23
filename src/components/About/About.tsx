import { Box, Typography } from "@mui/material";
import img from "../../assets/gif.gif";
const About = () => {
  return (
    <Box
      sx={{
        width: "75%",
        margin: "0 auto",
        height: "calc(100vh - 60px)",
      }}
    >
      <Box
        sx={{
          fontSize: "32px",
          fontFamily: "var(--ff-bold)",
          color: "var(--primary-main)",
          mb: "24px",
        }}
      >
        About me
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "120px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--ff-medium)",
            }}
          >
            Hi there! I’m{" "}
            <Box
              component={"span"}
              sx={{
                color: "var(--primary-dark)",
              }}
            >
              Mohamed Aasif
            </Box>
            , a passionate Full Stack Developer with a knack for turning ideas
            into dynamic web applications. With a solid foundation in both
            front-end and back-end technologies, I love building seamless user
            experiences and scalable systems. I thrive in collaborative
            environments and am always eager to learn new technologies and
            methodologies.
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--ff-medium)",
            }}
          >
            My journey in tech began with a simple curiosity about how websites
            are built. In college, I created a blog to share my thoughts on
            video games and quickly became fascinated by the code behind it.
            That initial project ignited my passion for coding, leading me to
            explore HTML, CSS, and JavaScript in depth. Since then, I’ve worked
            on various projects, including a personal portfolio and an
            e-commerce website, which have fueled my drive to continuously
            improve and innovate.
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--ff-medium)",
            }}
          >
            I’m excited to connect with fellow developers, share knowledge, and
            tackle new challenges together.
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--ff-medium)",
            }}
          >
            Let’s build something amazing!
          </Typography>
        </Box>
        <Box
          component="img"
          src={img}
          alt="avatar"
          width="300x"
          height="300px"
        />
      </Box>
    </Box>
  );
};

export default About;
