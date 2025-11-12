import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApiUrl } from "../../utils/apiEndpoints";
import { fetchWrapper } from "../../api/fetchWrapper";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = async () => {
    const payload = {
      email,
      password,
    };
    const data = await fetchWrapper(loginApiUrl, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (data?.authToken) {
      sessionStorage.setItem("authToken", data?.authToken);
      navigate("/dashboard");
    }
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
          background: "var(--light_card_bg_color) !important",
          width: "400px",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "var(--ff-bold)",
            fontSize: "24px",
            color: "var(--light_accent_color) !important",
          }}
        >
          Admin Login
        </Typography>
        <FormControl sx={{ width: "100%", mt: "24px" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">
            Email address
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type="text"
            label="Email address"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ width: "100%", mt: "24px" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  //   onMouseDown={handleMouseDownPassword}
                  //   onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOffOutlined />
                  ) : (
                    <VisibilityOutlined />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            mt: "24px",
            fontFamily: "var(--ff-medium)",
            background: "var(--dark_accent_color)",
            "&:hover": {
              background: "var(--dark_accent_hover_color)",
            },
          }}
          onClick={handleLogin}
        >
          Sign in
        </Button>
        <Box
          sx={{
            mt: "16px",
            textAlign: "center",
            color: "var(--light_primary_text_color) !important",
          }}
        >
          <Typography>If you don't have an account already?</Typography>
          <Typography
            sx={{
              color: "var(--light_accent_color)",
              cursor: "pointer",
              fontFamily: "var(--ff-medium)",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={() => navigate("/signup")}
          >
            Create an account
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
