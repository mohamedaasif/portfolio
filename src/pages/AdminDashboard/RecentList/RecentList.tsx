import { Box, Modal, Typography, Button } from "@mui/material";
import styles from "./RecentList.module.scss";
import { useState } from "react";
import { commonFetchFunction, deleteProjectApi } from "../../../api/projectApi";
import { deleteProject, getAllProjectsApi } from "../../../utils/apiEndpoints";

interface RecentListProps {
  title: string;
  projects: any;
  setProjects: any;
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const RecentList = (props: RecentListProps) => {
  const { title, projects, setProjects } = props;
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleOpen = (item: any) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const handleConfirmDelete = async () => {
    const data = await deleteProjectApi(deleteProject, selectedItem?._id);
    if (data?.message?.toLowerCase() === "success") {
      const res = await commonFetchFunction(getAllProjectsApi);
      setProjects(res?.data);
    }
    handleClose();
  };

  return (
    <Box sx={{ my: "24px" }}>
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
          <Typography sx={{ textAlign: "center", opacity: 0.5, py: "10px" }}>
            No Data Found
          </Typography>
        ) : (
          projects.map((item: any, idx: number) => (
            <Box
              className={styles.recentListTableItem}
              key={item?.title + idx}
              sx={{
                borderBottom:
                  idx !== projects.length - 1
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
                  onClick={() => handleOpen(item)}
                >
                  Delete
                </Typography>
              </Box>
            </Box>
          ))
        )}
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="confirm-delete-title"
        aria-describedby="confirm-delete-description"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(128, 128, 128, 0.5)",
            },
          },
        }}
      >
        <Box sx={modalStyle}>
          <Typography
            id="confirm-delete-title"
            variant="h6"
            sx={{ mb: 2, fontWeight: 600 }}
          >
            Confirm Delete
          </Typography>

          <Typography id="confirm-delete-description" sx={{ mb: 3 }}>
            Are you sure you want to delete{" "}
            <strong>{selectedItem?.title}</strong>? This action cannot be
            undone.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button variant="outlined" color="inherit" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleConfirmDelete}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default RecentList;
