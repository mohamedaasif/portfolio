import { Box, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { openEmail, redirectLinkHandler } from "../../utils/resuableFunctions";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../ThemeContext";

const Contact = () => {
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );
  return (
    <Box
      sx={{
        height: "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          width: "45%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
          Get In Touch
        </Box>
        <Box
          sx={{
            textAlign: "center",
            lineHeight: "24px",
            mb: "24px",
          }}
        >
          I’m currently exploring new job opportunities and excited to connect.
          My inbox is always open for questions, collaborations, or simply to
          say hello. I appreciate any leads or insights you might have, and I
          promise to respond as soon as I can.
        </Box>
        <Box
          sx={{
            mb: "24px",
          }}
        >
          {" "}
          Thank you for visiting my portfolio!
        </Box>
        <Box
          sx={{
            mb: "24px",
          }}
        >
          Feel free to reach out if you’d like to collaborate or chat!
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            color: "var(--primary-main)",
            cursor: "pointer",
          }}
        >
          <GitHubIcon
            onClick={() =>
              redirectLinkHandler("https://github.com/mohamedaasif")
            }
          />
          <EmailIcon onClick={() => openEmail()} />
          <LinkedInIcon
            onClick={() =>
              redirectLinkHandler(
                "https://www.linkedin.com/in/mohamed-usoof-aasif/"
              )
            }
          />
          <InstagramIcon
            onClick={() =>
              redirectLinkHandler(
                "https://www.instagram.com/mohamedaasif_?igsh=cTJxcDZjc3Nlb3Q3"
              )
            }
          />
        </Box>
      </Box>
      <Box
        sx={{
          color: darkTheme ? "var(--text-grey-500)" : "inherit",
          fontFamily: "var(--ff-medium)",
          fontSize: "14px",
        }}
      >
        Design & Built by Mohamed Aasif
      </Box>
    </Box>
  );
};

export default Contact;
