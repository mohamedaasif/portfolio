import {
  Box,
  Modal,
  Typography,
  Button,
  TextField,
  InputLabel,
  Chip,
} from "@mui/material";
import styles from "./RecentList.module.scss";
import { useState } from "react";
import {
  createProjectApiUrl,
  deleteProject,
  getAllProjectsApi,
} from "../../../utils/apiEndpoints";
import { fetchWrapper } from "../../../api/fetchWrapper";

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
  const [openAddProjectModal, setOpenAddProjectModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [techInput, setTechInput] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technology: [],
    ghLink: "",
    webLink: "",
  });

  const handleOpen = (item: any) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const handleAddProjectModal = () => {
    setOpenAddProjectModal(false);
  };

  const handleConfirmDelete = async () => {
    const data = await fetchWrapper(deleteProject + selectedItem?._id, {
      method: "DELETE",
    });
    if (data?.message?.toLowerCase() === "success") {
      const res = await fetchWrapper(getAllProjectsApi);
      setProjects(res?.data);
    }
    handleClose();
  };

  const formDataHandler = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: key === "technology" ? [...prev.technology, value] : value,
    }));
  };

  const removeSkill = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      technology: prev.technology.filter((tech) => tech !== item),
    }));
  };

  const addProjectHandler = async () => {
    const data = await fetchWrapper(createProjectApiUrl, {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (data?.message?.toLowerCase() === "success") {
      const res = await fetchWrapper(getAllProjectsApi);
      setProjects(res?.data);
    }
    handleAddProjectModal();
  };

  return (
    <Box sx={{ my: "24px", width: { xs: "100%", md: "65%" } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
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
        <Button
          variant="contained"
          sx={{
            width: "fit-content",
            height: "35px",
            textTransform: "capitalize",
            fontFamily: "var(--ff-medium)",
            background: "var(--dark_accent_color)",
            "&:hover": {
              background: "var(--dark_accent_hover_color)",
            },
          }}
          onClick={() => setOpenAddProjectModal(true)}
        >
          Add Project
        </Button>
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
      <Modal
        open={openAddProjectModal}
        onClose={handleAddProjectModal}
        aria-labelledby="add-project-title"
        aria-describedby="add-project-description"
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
            id="confirm-add-project-title"
            variant="h6"
            sx={{
              mb: 4,
              fontWeight: 600,
              color: "var(--light_primary_text_color)",
            }}
          >
            Add Project
          </Typography>

          <Box
            sx={{
              mb: 4,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Box>
              <InputLabel shrink>Title*</InputLabel>
              <TextField
                placeholder="Enter Project Title"
                variant="outlined"
                fullWidth
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
                value={formData.title}
                onChange={(e) => formDataHandler("title", e.target.value)}
              />
            </Box>
            <Box>
              <InputLabel shrink>Description*</InputLabel>
              <TextField
                multiline
                fullWidth
                minRows={4}
                maxRows={4}
                value={formData.description}
                onChange={(e) => formDataHandler("description", e.target.value)}
                slotProps={{
                  input: {
                    inputProps: {
                      maxLength: 300,
                    },
                  },
                }}
              />
              <Box
                style={{
                  fontSize: 12,
                  textAlign: "right",
                  color: "var(--light_primary_text_color)",
                }}
              >
                {formData.description.length}/300
              </Box>
            </Box>
            <Box>
              <InputLabel shrink>
                Technology Used* (You can add at most 10 skills)
              </InputLabel>
              <TextField
                placeholder="Enter Skills"
                variant="outlined"
                fullWidth
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
                disabled={formData?.technology?.length >= 10}
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && techInput.trim() !== "") {
                    e.preventDefault();
                    formDataHandler("technology", techInput.trim());
                    setTechInput("");
                  }
                }}
              />
              <Box mt={2} sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {formData?.technology?.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    onDelete={() => removeSkill(item)}
                    color="primary"
                  />
                ))}
              </Box>
            </Box>
            <Box>
              <InputLabel shrink>GitHub Link</InputLabel>
              <TextField
                placeholder="Enter GitHub Link"
                variant="outlined"
                fullWidth
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
                value={formData.ghLink}
                onChange={(e) => formDataHandler("ghLink", e.target.value)}
              />
            </Box>
            <Box>
              <InputLabel shrink>Project Link</InputLabel>
              <TextField
                placeholder="Enter Project Link"
                variant="outlined"
                fullWidth
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
                value={formData.webLink}
                onChange={(e) => formDataHandler("webLink", e.target.value)}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleAddProjectModal}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "fit-content",
                height: "35px",
                textTransform: "capitalize",
                fontFamily: "var(--ff-medium)",
                background: "var(--dark_accent_color)",
                "&:hover": {
                  background: "var(--dark_accent_hover_color)",
                },
              }}
              onClick={addProjectHandler}
            >
              Add Project
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default RecentList;
