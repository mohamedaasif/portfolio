import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styles from "./AdminDashboard.module.scss";
import SideBar from "./SideBar/SideBar";
import DashboardCard from "./DashboardCard/DashboardCard";
import RecentList from "./RecentList/RecentList";
import { commonFetchFunction } from "../../api/projectApi";
import { getAllProjectsApi } from "../../utils/apiEndpoints";

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const getAllProjects = async () => {
    const data = await commonFetchFunction(getAllProjectsApi);
    setProjects(data?.data ?? []);
  };
  useEffect(() => {
    getAllProjects();
  }, []);

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
      <SideBar />
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
        <Box sx={{ mt: "24px", display: "flex", gap: "16px" }}>
          <DashboardCard count={projects?.length} title={"Project"} />
          {/* <DashboardCard count={0} title={"Blogs"} />
          <DashboardCard count={5} title={"Comments"} /> */}
        </Box>
        <RecentList
          title={"Recent Projects"}
          projects={projects}
          setProjects={setProjects}
        />
        {/* <RecentList title={"Recent Blogs"} /> */}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
