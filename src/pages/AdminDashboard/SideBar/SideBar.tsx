import { Typography, Box } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import styles from "./SideBar.module.scss";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  let userData: any = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <Box
      sx={{
        width: "20%",
        background: "var(--light_bg_color)",
        py: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box
          sx={{
            fontFamily: "var(--ff-semibold)",
            fontSize: { xs: "16px", md: "18px" },
            px: "16px",
          }}
        >
          Admin dashboard
        </Box>
        <Box
          sx={{
            mt: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography className={styles.sideBarListItem}>
            <DashboardOutlinedIcon />
            Dashboard
          </Typography>
          <Typography className={styles.sideBarListItem}>
            <WorkHistoryOutlinedIcon />
            Projects
          </Typography>
          {/* <Typography className={styles.sideBarListItem}>
          <BookOutlinedIcon />
          Blog posts
        </Typography>
        <Typography className={styles.sideBarListItem}>
          <CommentOutlinedIcon />
          Comments
        </Typography> */}
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--ff-semibold)",
            fontSize: "16px",
            px: "16px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--ff-semibold)",
              fontSize: "16px",
              background: "black",
              color: "var(--white)",
              padding: "4px 8px",
              borderRadius: "50%",
            }}
          >
            {userData?.name?.charAt(0)}
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--ff-semibold)",
              fontSize: "16px",
            }}
          >
            {userData?.name}
          </Typography>
        </Box>
        <Box onClick={handleLogout}>
          <Typography className={styles.sideBarListItem} sx={{ ml: "4px" }}>
            <LogoutIcon />
            Logout
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
