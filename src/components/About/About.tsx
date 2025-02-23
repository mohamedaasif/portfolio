import { Box, Typography } from "@mui/material";
import img from "../../assets/gif.gif";
import { skills } from "../../utils/globalValues";
import { ThemeContext, ThemeContextType } from "../../ThemeContext";
import { useContext } from "react";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

const About = (props: AboutProps) => {
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );
  return (
    <Box
      ref={props?.aboutRef}
      sx={{
        width: { xs: "95%", md: "75%" },
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          fontSize: { xs: "24px", md: "32px" },
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
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: "60px", lg: "120px" },
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
            Hello! My name is Aasif and I enjoy creating things that live on the
            internet. My interest in web development started back in 2018 when I
            decided to create a static website using HTML & CSS. That initial
            project ignited my passion for coding, leading me to explore HTML,
            CSS, and JavaScript in depth.
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--ff-medium)",
            }}
          >
            Fast-forward to today, and I’ve had the privilege of working at a
            telecom company, a start-up and a huge corporation. My main focus
            these days is building accessible, inclusive products and digital
            experiences at{" "}
            <Typography
              component="span"
              sx={{
                color: "var(--primary-dark)",
              }}
            >
              Reach Mobile
            </Typography>{" "}
            for a variety of clients.
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--ff-medium)",
            }}
          >
            Here are a few technologies I’ve been working with recently:
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "36px",
            }}
          >
            <Box>
              {skills.slice(0, 3).map((list: string, id: number) => (
                <Box
                  key={id}
                  sx={{
                    color: darkTheme ? "var(--text-grey-500)" : "inherit",
                    fontFamily: "var(--ff-medium)",
                    fontSize: "14px",
                    mb: "24px",
                    position: "relative",
                    paddingLeft: "30px",
                    "&::before": {
                      content: '"▹"',
                      position: "absolute",
                      left: "0px",
                      color: "var(--primary-main)",
                    },
                  }}
                >
                  {list}
                </Box>
              ))}
            </Box>
            <Box>
              {skills.slice(3, 6).map((list: string, id: number) => (
                <Box
                  key={id}
                  sx={{
                    color: darkTheme ? "var(--text-grey-500)" : "inherit",
                    fontFamily: "var(--ff-medium)",
                    fontSize: "14px",
                    mb: "24px",
                    position: "relative",
                    paddingLeft: "30px",
                    "&::before": {
                      content: '"▹"',
                      position: "absolute",
                      left: "0px",
                      color: "var(--primary-main)",
                    },
                  }}
                >
                  {list}
                </Box>
              ))}
            </Box>
          </Box>
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
