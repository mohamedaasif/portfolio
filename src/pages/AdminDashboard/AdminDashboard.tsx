import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import styles from "./AdminDashboard.module.scss";

const AdminDashboard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "var(--light_card_bg_color) !important",
        color: "var(--light_primary_text_color) !important",
        display: "flex",
      }}
    >
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
      <Box
        sx={{
          width: "80%",
          padding: "24px",
        }}
      >
        <Box
          sx={{
            fontFamily: "var(--ff-semibold)",
            fontSize: { xs: "16px", md: "24px" },
          }}
        >
          Dashboard
        </Box>
        <Box sx={{ mt: "24px" }}>
          <Box
            sx={{
              background: "var(--light_bg_color)",
              borderRadius: "8px",
              width: "150px",
              height: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>10</Typography>
            <Typography>Projects</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
