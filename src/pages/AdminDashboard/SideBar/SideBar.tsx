import { Typography, Box } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: "20%",
        background: "var(--light_bg_color)",
        py: "24px",
      }}
    >
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
        <Typography className={styles.sideBarListItem}>
          <BookOutlinedIcon />
          Blog posts
        </Typography>
        <Typography className={styles.sideBarListItem}>
          <CommentOutlinedIcon />
          Comments
        </Typography>
      </Box>
    </Box>
  );
};

export default SideBar;
