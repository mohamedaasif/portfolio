import { Box } from "@mui/material";

const Footer = (props: any) => {
  return (
    <Box
      sx={{
        color: props?.darkTheme
          ? "var(--dark_secondary_text_color)"
          : "var(--light_secondary_text_color)",
        fontFamily: "var(--ff-medium)",
        fontSize: "14px",
        textAlign: "center",
        pb: "60px",
      }}
    >
      Design & Built by Mohamed Aasif
    </Box>
  );
};

export default Footer;
