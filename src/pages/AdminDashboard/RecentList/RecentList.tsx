import { useState } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./RecentList.module.scss";

interface RecentListProps {
  title: string;
}

const RecentList = (props: RecentListProps) => {
  const { title } = props;
  const data = ["Portfolio Website", "Airtel OTT"];
  return (
    <Box
      sx={{
        my: "24px",
      }}
    >
      <Box
        sx={{
          mb: "24px",
          fontFamily: "var(--ff-semibold)",
          fontSize: { xs: "16px", md: "24px" },
        }}
      >
        {title}
      </Box>
      <Box className={styles.recentListTable}>
        <Box className={styles.recentListTableHeader}>
          <Typography className={styles.recentListHeaderItem}>Name</Typography>
          <Typography className={styles.recentListHeaderItem}>
            Actions
          </Typography>
        </Box>
        {data?.map((item: string, idx: number) => {
          return (
            <Box
              className={styles.recentListTableItem}
              key={item + idx}
              sx={{
                borderBottom:
                  idx !== data.length - 1
                    ? "1px solid var(--light_border_color)"
                    : "none",
              }}
            >
              <Typography className={styles.recentListItem}>{item}</Typography>
              <Box className={styles.recentListItem}>
                <Typography
                  className={styles.recentListActionItem}
                  sx={{
                    background: "var(--light_accent_color)",
                    "&:hover": {
                      background: "var(--light_accent_hover_color)",
                    },
                  }}
                >
                  Edit
                </Typography>
                <Typography
                  className={styles.recentListActionItem}
                  sx={{
                    background: "var(--danger)",
                    "&:hover": {
                      background: "var(--danger_hover)",
                    },
                  }}
                >
                  Delete
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default RecentList;
