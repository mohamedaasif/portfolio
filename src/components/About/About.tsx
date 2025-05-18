import { Box, Typography } from "@mui/material";
import img from "../../assets/Happy_Laptop.svg";
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
        width: { xs: "95%", sm: "75%" },
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          fontSize: { xs: "24px", md: "32px" },
          fontFamily: "var(--ff-black)",
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
          alignItems: { sm: "center", lg: "unset" },
          gap: { xs: "10px", lg: "120px" },
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
            Hello! I’m Aasif — a passionate web developer who loves building
            things for the internet.
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--ff-medium)",
            }}
          >
            My interest in web development began in 2018 when I created a simple
            static site using HTML and CSS — a project that sparked my passion
            for coding. Since then, I’ve explored the full stack and worked
            across a telecom company, a startup, and a large corporation.
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--ff-medium)",
            }}
          >
            Currently, I build accessible, user-friendly digital experiences at{" "}
            <Typography
              component="span"
              sx={{
                color: "var(--primary-dark)",
              }}
            >
              Reach Mobile
            </Typography>{" "}
            , helping deliver solutions for a range of clients.
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
          width={{ xs: "100%", sm: "500px" }}
          height="300px"
        />
      </Box>
    </Box>
  );
};

export default About;
