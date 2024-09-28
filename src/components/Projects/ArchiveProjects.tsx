import { Box } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useContext, useEffect } from "react";
import { ThemeContext, ThemeContextType } from "../../ThemeContext";
import styles from "./ArchiveProjects.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { archiveProjectDetails } from "../../utils/globalValues";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { redirectLinkHandler } from "../../utils/resuableFunctions";
import { ProjectsProps } from "../../utils/typeInterface";

const ArchiveProjects = (props: ProjectsProps) => {
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );
  const { setIsArchiveProjects } = props;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Box
      sx={{
        width: "75%",
        margin: "0px auto",
        p: "100px 0px",
      }}
    >
      <Box
        sx={{
          color: "var(--primary-main)",
          fontFamily: "var(--ff-bold)",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "4px",
          cursor: "pointer",
          borderBottom: darkTheme
            ? "1px solid var(--text-grey-800)"
            : "1px solid var(--grey-color-dark)",
          pb: "8px",
          mb: "24px",
        }}
        onClick={() => setIsArchiveProjects(false)}
      >
        <KeyboardBackspaceIcon />
        Back
      </Box>
      <Box
        sx={{
          fontSize: "32px",
          fontFamily: "var(--ff-bold)",
          color: "var(--primary-main)",
          mb: "36px",
        }}
      >
        All Projects
      </Box>
      <Box>
        <TableContainer
          component={Paper}
          sx={{
            background: "transparent",
            boxShadow: "none",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ "td, th": { border: 0 } }}>
                <TableCell className={styles.tableHeadCell}>Year</TableCell>
                <TableCell className={styles.tableHeadCell}>Project</TableCell>
                <TableCell className={styles.tableHeadCell}>Made at</TableCell>
                <TableCell className={styles.tableHeadCell}>
                  Built with
                </TableCell>
                <TableCell className={styles.tableHeadCell}>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {archiveProjectDetails.map((row: any, idx: number) => (
                <TableRow key={idx} sx={{ "td, th": { border: 0 } }}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={styles.tableDataCell}
                    sx={{
                      color: darkTheme
                        ? "var(--text-grey-500) !important"
                        : "var(--black) !important",
                    }}
                  >
                    {row.year}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "var(--ff-bold) !important",
                      color: darkTheme
                        ? "var(--white) !important"
                        : "var(--black) !important",
                    }}
                    className={styles.tableDataCell}
                  >
                    {row.project}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: darkTheme
                        ? "var(--text-grey-500) !important"
                        : "var(--black) !important",
                    }}
                    className={styles.tableDataCell}
                  >
                    {row.madeAt}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    {row.builtWith.map((data: string) => (
                      <Box
                        key={data + idx}
                        sx={{
                          color: "var(--primary-main)",
                          fontSize: "12px",
                          padding: "4px 12px",
                          borderRadius: "25px",
                          background: "hsla(210, 100%, 60%, 0.1)",
                        }}
                      >
                        {data}
                      </Box>
                    ))}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: darkTheme
                        ? "var(--text-grey-500) !important"
                        : "var(--black) !important",
                      cursor: "pointer",
                    }}
                    className={styles.tableDataCell}
                  >
                    {row?.gitLink && (
                      <GitHubIcon
                        sx={{
                          mr: "8px",
                          "&:hover": {
                            color: "var(--primary-main) !important",
                          },
                        }}
                        onClick={() => redirectLinkHandler(row?.gitLink)}
                      />
                    )}
                    {row?.webLink && (
                      <OpenInNewIcon
                        sx={{
                          "&:hover": {
                            color: "var(--primary-main) !important",
                          },
                        }}
                        onClick={() => redirectLinkHandler(row?.webLink)}
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ArchiveProjects;
