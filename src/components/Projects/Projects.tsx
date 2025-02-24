import { Box } from "@mui/material";
import { projectDesc } from "../../utils/globalValues";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import EastIcon from "@mui/icons-material/East";
import { redirectLinkHandler } from "../../utils/resuableFunctions";
import { ProjectsProps } from "../../utils/typeInterface";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../ThemeContext";
import { useMediaQuery, useTheme } from "@mui/material";

const Projects = (props: ProjectsProps) => {
  const { setIsArchiveProjects, projectRef } = props;
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );
  const theme = useTheme();
  // const largeDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  // const desktop = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const ipad = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      ref={projectRef}
      sx={{
        width: { xs: "95%", sm: "80%" },
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          fontSize: { xs: "24px", md: "32px" },
          fontFamily: "var(--ff-black)",
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
            flexDirection: {
              xs: "row",
              md: "column",
              lg:
                (idx + 1) % 2 === 0 && !mobile && !ipad ? "row-reverse" : "row",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            mb: {
              xs: "50px",
              sm: projectDesc?.length === idx + 1 ? "60px" : "120px",
            },
            background: {
              xs: darkTheme
                ? "rgba(250, 250, 250, 0.05)"
                : "rgba(236, 236, 236, 0.5)",
              md: "none",
            },
            p: { xs: "30px 15px", md: "0" },
            borderRadius: { xs: "4px", md: "0" },
          }}
        >
          {!mobile && !ipad && (
            <Box
              sx={{
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <Box
                component="img"
                src={data?.img}
                alt="avatar"
                sx={{
                  borderRadius: "4px",
                }}
                width={"550px"}
                height={"350px"}
              />
            </Box>
          )}
          <Box
            sx={{
              width: { xs: "95%", md: "75%", lg: "500px" },
              textAlign: {
                xs: "left",
                md: (idx + 1) % 2 === 0 ? "left" : "right",
              },
            }}
          >
            <Box
              sx={{
                pb: "24px",
                fontSize: { xs: "18px", sm: "24px" },
                color: "var(--primary-main)",
                fontFamily: "var(--ff-bold)",
              }}
            >
              {data.name}
            </Box>
            <Box
              sx={{
                mb: "24px",
                background: { xs: "none", md: "var(--text-grey-800)" },
                p: { xs: "0px", md: "24px" },
                borderRadius: "4px",
                color: darkTheme
                  ? "var(--white)"
                  : { xs: "var(--black)", md: "var(--white)" },
              }}
            >
              {data.desc}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "flex-start",
                  md: (idx + 1) % 2 === 0 ? "flex-start" : "flex-end",
                },
                flexWrap: "wrap",
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
                justifyContent: {
                  xs: "flex-start",
                  md: (idx + 1) % 2 === 0 ? "flex-start" : "flex-end",
                },
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
