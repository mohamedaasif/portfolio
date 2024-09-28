import { Box } from "@mui/material";
import img from "../../assets/mcc.png";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../ThemeContext";
import { projectDesc } from "../../utils/globalValues";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import EastIcon from "@mui/icons-material/East";
import { redirectLinkHandler } from "../../utils/resuableFunctions";
import { ProjectsProps } from "../../utils/typeInterface";

const Projects = (props: ProjectsProps) => {
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );
  const { setIsArchiveProjects } = props;

  return (
    <Box
      sx={{
        width: "65%",
        margin: "0 auto",
        pb: "120px",
      }}
    >
      <Box
        sx={{
          fontSize: "32px",
          fontFamily: "var(--ff-bold)",
          color: "var(--primary-main)",
          mb: "36px",
        }}
      >
        Some Things I've Built
      </Box>
      {projectDesc.map((data: any, idx: number) => (
        <Box
          key={data.name + idx}
          sx={{
            display: "flex",
            flexDirection: (idx + 1) % 2 === 0 ? "row-reverse" : "row",
            position: "relative",
            mb: "100px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "fit-content",
              height: "fit-content",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={img}
              alt="avatar"
              sx={{
                borderRadius: "4px",
                zIndex: "0",
              }}
            />
            <Box
              sx={{
                background: "var(--primary-light)",
                opacity: "0.5",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                borderRadius: "4px",
                "&:hover": {
                  background: " var(--primary-light)",
                  opacity: "0.05",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              width: "500px",
              position: "absolute",
              top: "50%",
              right: (idx + 1) % 2 === 0 ? "unset" : "0%",
              left: (idx + 1) % 2 === 0 ? "0%" : "unset",
              transform: "translate(0%, -50%)",
              textAlign: (idx + 1) % 2 === 0 ? "left" : "right",
              //   p: "24px",
            }}
          >
            <Box
              sx={{
                pb: "24px",
                fontSize: "24px",
                fontWeight: "var(--ff-bold)",
                color: "var(--primary-main)",
              }}
            >
              {data.name}
            </Box>
            <Box
              sx={{
                mb: "24px",
                background: "var(--text-grey-800)",
                p: "24px",
                borderRadius: "4px",
                color: "var(--white)",
              }}
            >
              {data.desc}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: (idx + 1) % 2 === 0 ? "flex-start" : "flex-end",
                gap: "24px",
                mb: "24px",
              }}
            >
              {data.skills.map((skill: string, idx: number) => (
                <Box
                  key={idx}
                  sx={{
                    color: "var(--primary-dark)",
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: (idx + 1) % 2 === 0 ? "flex-start" : "flex-end",
                gap: "24px",
                color: "var(--primary-main)",
                cursor: "pointer",
              }}
            >
              {data?.gitLink && (
                <GitHubIcon
                  onClick={() => redirectLinkHandler(data?.gitLink)}
                />
              )}
              {data?.webLink && (
                <OpenInNewIcon
                  onClick={() => redirectLinkHandler(data?.webLink)}
                />
              )}
            </Box>
          </Box>
        </Box>
      ))}
      <Box
        sx={{
          textTransform: "uppercase",
          color: "var(--primary-main)",
          fontFamily: "var(--ff-bold)",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          cursor: "pointer",
        }}
        onClick={() => setIsArchiveProjects(true)}
      >
        View All Projects
        <EastIcon />
      </Box>
    </Box>
  );
};

export default Projects;
