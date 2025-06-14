import { Box, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { openEmail, redirectLinkHandler } from "../../utils/resuableFunctions";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../ThemeContext";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const Contact = (props: ContactProps) => {
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );
  return (
    <Box
      ref={props.contactRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "120px auto",
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", sm: "65%", lg: "45%" },
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            fontFamily: "var(--ff-bold)",
            color: darkTheme
              ? "var(--dark_accent_color)"
              : "var(--light_accent_color)",
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
            fontFamily: "var(--ff-regular)",
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
            fontFamily: "var(--ff-regular)",
          }}
        >
          {" "}
          Thank you for visiting my portfolio!
        </Box>
        <Box
          sx={{
            mb: "24px",
            textAlign: "center",
            fontFamily: "var(--ff-regular)",
          }}
        >
          Feel free to reach out if you’d like to collaborate or chat!
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            color: darkTheme
              ? "var(--dark_accent_color)"
              : "var(--light_accent_color)",
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
    </Box>
  );
};

export default Contact;
