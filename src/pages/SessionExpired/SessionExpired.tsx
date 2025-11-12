import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import errorImg from "../../assets/error.png";
import { useNavigate } from "react-router-dom";

const SessionExpired = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "8px",
          background: "var(--light_card_bg_color)",
          padding: "16px 32px 32px",
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src={errorImg} alt="errorImg" width="50px" />
        <Typography
          sx={{
            color: "var(--light_primary_text_color)",
          }}
        >
          Your session has expired. Please login in again.
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "fit-content",
            mt: "24px",
            fontFamily: "var(--ff-medium)",
            background: "var(--dark_accent_color)",
            "&:hover": {
              background: "var(--dark_accent_hover_color)",
            },
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default SessionExpired;
