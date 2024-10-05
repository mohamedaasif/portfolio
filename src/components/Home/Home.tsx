import { Box, Typography } from "@mui/material";
import styles from "./Home.module.scss";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

interface HomeProps {
  homeRef: React.RefObject<HTMLDivElement | null>;
}

const Home = (props: HomeProps) => {
  const handleViewPdf = () => {
    const pdfUrl = "/mohamed-aasif-frontend-developer.pdf";
    window.open(pdfUrl, "_blank");
  };
  return (
    <Box className={styles.homeContainer} ref={props?.homeRef}>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "var(--primary-main)",
            fontFamily: "var(--ff-bold)",
            fontSize: { xs: "24px", md: "36px" },
            mb: "24px",
          }}
        >
          Full Stack Developer | React, Node.js, MongoDB.
        </Typography>
        <Typography
          sx={{
            color: "var(--text-grey-500)",
            fontFamily: "var(--ff-medium)",
            fontSize: { xs: "16px", md: "18px" },
            mb: "48px ",
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
        <Box
          sx={{
            margin: "0 auto",
            background: "var(--primary-main)",
            width: "fit-content",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
            fontFamily: "var(--ff-bold)",
            fontSize: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            color: "var(--white)",
          }}
          onClick={handleViewPdf}
        >
          Download Resume
          <FileDownloadIcon
            sx={{
              fontSize: "18px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
