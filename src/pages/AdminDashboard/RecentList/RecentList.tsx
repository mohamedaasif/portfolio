import { Box, Typography } from "@mui/material";
import styles from "./RecentList.module.scss";

interface RecentListProps {
  title: string;
  projects: any;
}

const RecentList = (props: RecentListProps) => {
  const { title, projects } = props;

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
        {!projects?.length ? (
          <Typography
            sx={{
              textAlign: "center",
              opacity: "0.5",
              py: "10px",
            }}
          >
            No Data Found
          </Typography>
        ) : (
          projects?.map((item: any, idx: number) => {
            return (
              <Box
                className={styles.recentListTableItem}
                key={item?.title + idx}
                sx={{
                  borderBottom:
                    idx !== projects?.length - 1
                      ? "1px solid var(--light_border_color)"
                      : "none",
                }}
              >
                <Typography className={styles.recentListItem}>
                  {item?.title}
                </Typography>
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
          })
        )}
      </Box>
    </Box>
  );
};

export default RecentList;
