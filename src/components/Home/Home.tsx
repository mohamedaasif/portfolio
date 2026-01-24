import { Box, Typography } from "@mui/material";
import styles from "./Home.module.scss";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../ThemeContext";

interface HomeProps {
  homeRef: React.RefObject<HTMLDivElement | null>;
}

const Home = (props: HomeProps) => {
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext,
  );
  const handleViewPdf = () => {
    const pdfUrl =
      "https://mohamedaasif.github.io/portfolio/Mohamed_Aasif_Senior_Frontend_Engineer.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Mohamed_Aasif_Senior_Frontend_Engineer.pdf";
    link.click();
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
            fontFamily: "var(--ff-bold)",
            fontSize: { xs: "24px", md: "36px" },
            mb: "24px",
          }}
        >
          Full Stack Developer | Delivering End-to-End Web Experiences
        </Typography>
        <Typography
          sx={{
            fontFamily: "var(--ff-regular)",
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
            background: darkTheme
              ? "var(--dark_accent_color)"
              : "var(--light_accent_color)",
            width: "fit-content",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
            fontFamily: "var(--ff-medium)",
            fontSize: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            color: "var(--white)",
            "&:hover": {
              background: darkTheme
                ? "var(--dark_accent_hover_color)"
                : "var(--light_accent_hover_color)",
            },
          }}
          onClick={handleViewPdf}
        >
          Download Resume
          <FileDownloadIcon
            className={styles.downloadIcon}
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
