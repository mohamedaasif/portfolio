import { useMediaQuery, useTheme } from "@mui/material";

export const redirectLinkHandler = (link: string) => {
  window.open(link);
};

export const openEmail = () => {
  const email = "mohamedaasif.md@gmail.com";
  const mailtoLink = `mailto:${email}`;

  window.open(mailtoLink);
};

export const getResolutionDetails = () => {
  const theme = useTheme();
  const largeDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const desktop = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const ipad = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return {
    largeDesktop,
    desktop,
    ipad,
    mobile,
  };
};
