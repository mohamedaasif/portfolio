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
  updateProjectApiUrl,
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
  const [isEditProject, setIsEditProject] = useState(false);
  const [techInput, setTechInput] = useState("");
  const [formData, setFormData] = useState<any>({
    title: "",
    description: "",
    technology: [],
    ghLink: "",
    webLink: "",
    workedAt: "",
    year: "",
  });
  const [image, setImage] = useState<string | undefined>(undefined);
  const [imageFile, setImageFile] = useState<File | null>(null);

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
    setSelectedItem(null);
    setIsEditProject(false);
    setFormData({
      title: "",
      description: "",
      technology: [],
      ghLink: "",
      webLink: "",
      workedAt: "",
      year: "",
    });
    setImage(undefined);
    setImageFile(null);
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
    setFormData((prev: any) => ({
      ...prev,
      [key]: key === "technology" ? [...prev.technology, value] : value,
    }));
  };

  const removeSkill = (item: string) => {
    setFormData((prev: any) => ({
      ...prev,
      technology: prev.technology.filter((tech: any) => tech !== item),
    }));
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/") || file.size > 2 * 1024 * 1024)
      return;

    setImage(URL.createObjectURL(file));
    setImageFile(file);
  };

  const addProjectHandler = async () => {
    const payload = new FormData();
    for (let key in formData) {
      if (Array.isArray(formData[key])) {
        payload.append(key, JSON.stringify(formData[key]));
      } else {
        payload.append(key, formData[key]);
      }
    }
    if (imageFile) {
      payload.append("thumbnail", imageFile);
    }

    const data = await fetchWrapper(createProjectApiUrl, {
      method: "POST",
      body: payload,
    });
    if (data?.message?.toLowerCase() === "success") {
      const res = await fetchWrapper(getAllProjectsApi);
      setProjects(res?.data);
    }
    handleAddProjectModal();
  };

  const editProjectHandler = async (item: any) => {
    setIsEditProject(true);
    setSelectedItem(item);
    setFormData({
      title: item?.title,
      description: item?.description,
      technology: item?.technology,
      ghLink: item?.ghLink || "",
      webLink: item?.webLink || "",
      workedAt: item?.workedAt || "",
      year: item?.year || "",
    });
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const imageURL = item.thumbnail
      ? `${API_BASE_URL}/${item.thumbnail}`
      : undefined;
    setImage(imageURL);

    setOpenAddProjectModal(true);
  };

  const updateProjectHanler = async () => {
    const payload: any = {
      postId: selectedItem?._id,
      data: {
        title: formData?.title,
        description: formData?.description,
        technology: formData?.technology,
        ghLink: formData?.ghLink || "",
        webLink: formData?.webLink || "",
        workedAt: formData?.workedAt || "",
        year: formData?.year || "",
      },
    };
    const data = await fetchWrapper(updateProjectApiUrl, {
      method: "PUT",
      body: JSON.stringify(payload),
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
                  onClick={() => editProjectHandler(item)}
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
        sx={{
          width: "40%",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            ...modalStyle,
            width: "100%",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <Typography
            id="confirm-add-project-title"
            variant="h6"
            sx={{
              mb: 4,
              fontWeight: 600,
              color: "var(--light_primary_text_color)",
            }}
          >
            {isEditProject ? "Edit Project" : "Add Project"}
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
              <InputLabel shrink>Project Thumbnail</InputLabel>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {image && (
                  <Box
                    component="img"
                    alt="thumbnail"
                    src={image}
                    sx={{
                      width: "100%",
                      height: "auto",
                      mb: 2,
                    }}
                  />
                )}

                <Button variant="outlined" component="label">
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImage}
                  />
                </Button>
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
                {formData?.technology?.map((item: any) => (
                  <Chip
                    key={item}
                    label={item}
                    onDelete={() => removeSkill(item)}
                    color="primary"
                  />
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <InputLabel shrink>Worked at*</InputLabel>
                <TextField
                  placeholder="Enter Organization"
                  variant="outlined"
                  fullWidth
                  size="small"
                  slotProps={{ inputLabel: { shrink: true } }}
                  value={formData.workedAt}
                  onChange={(e) => formDataHandler("workedAt", e.target.value)}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <InputLabel shrink>Year*</InputLabel>
                <TextField
                  placeholder="Enter Year"
                  variant="outlined"
                  fullWidth
                  size="small"
                  slotProps={{ inputLabel: { shrink: true } }}
                  value={formData.year}
                  onChange={(e) => formDataHandler("year", e.target.value)}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
              }}
            >
              <Box sx={{ flex: 1 }}>
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
              <Box sx={{ flex: 1 }}>
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
              onClick={() =>
                isEditProject ? updateProjectHanler() : addProjectHandler()
              }
            >
              {isEditProject ? "Update" : "Add Project"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default RecentList;
