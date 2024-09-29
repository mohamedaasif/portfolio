import { Box } from "@mui/material";

const Footer = (props: any) => {
  return (
    <Box
      sx={{
        color: props?.darkTheme ? "var(--text-grey-500)" : "inherit",
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
