import { Box } from "@mui/material";
// import styles from "./Experience.module.scss";
import {
  experience,
  experienceInDetails,
  jobTitle,
} from "../../utils/globalValues";
import { useContext, useState } from "react";
import { ThemeContext, ThemeContextType } from "../../ThemeContext";

interface ExperienceProps {
  experienceRef: React.RefObject<HTMLDivElement | null>;
}
const Experience = (props: ExperienceProps) => {
  const [selectItem, setSelectItem] = useState<string>(experience[0]);
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );
  return (
    <Box
      ref={props?.experienceRef}
      sx={{
        width: { xs: "95%", sm: "75%", lg: "50%" },
        margin: "120px auto",
      }}
    >
      <Box
        sx={{
          fontSize: { xs: "24px", md: "32px" },
          fontFamily: "var(--ff-bold)",
          color: "var(--primary-main)",
          mb: "36px",
        }}
      >
        Where I've Worked
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              overflowX: { xs: "auto", md: "unset" },
            }}
          >
            {experience.map((data: string, idx: number) => (
              <Box
                onClick={() => setSelectItem(data)}
                key={idx}
                sx={{
                  width: "120px",
                  textAlign: "center",
                  padding: {
                    xs: "15px 10px",
                    sm: "15px 30px",
                  },
                  cursor: "pointer",
                  fontSize: { xs: "14px", sm: "16px" },
                  fontFamily: "var(--ff-medium)",
                  borderLeft: {
                    xs: "none",
                    md:
                      data === selectItem
                        ? "2px solid var(--primary-dark)"
                        : darkTheme
                        ? "2px solid var(--text-grey-800)"
                        : "2px solid var(--grey-color-dark)",
                  },
                  borderBottom: {
                    xs:
                      data === selectItem
                        ? "2px solid var(--primary-dark)"
                        : darkTheme
                        ? "2px solid var(--text-grey-800)"
                        : "2px solid var(--grey-color-dark)",
                    md: "none",
                  },
                  color:
                    data === selectItem ? "var(--primary-dark)" : "inherit",
                  "&:hover": {
                    background: darkTheme
                      ? "rgba(250, 250, 250, 0.05)"
                      : "rgba(236, 236, 236, 0.5)",
                  },
                }}
              >
                {data}
              </Box>
            ))}
          </Box>
          <Box>
            <Box
              sx={{
                color: "var(--primary-light)",
                fontFamily: "var(--ff-bold)",
                fontSize: "24px",
                mb: "24px",
              }}
            >
              {jobTitle[selectItem].title}
            </Box>
            <Box
              sx={{
                color: darkTheme ? "var(--text-grey-500)" : "inherit",
                fontFamily: "var(--ff-medium)",
                fontSize: "14px",
                mb: "24px",
              }}
            >
              {jobTitle[selectItem].duration}
            </Box>
            {/*; */}
            {experienceInDetails?.[selectItem].map(
              (list: string, id: number) => (
                <Box
                  key={selectItem + id}
                  sx={{
                    color: darkTheme ? "var(--text-grey-500)" : "inherit",
                    fontFamily: "var(--ff-medium)",
                    fontSize: "14px",
                    mb: "24px",
                    position: "relative",
                    paddingLeft: "30px",
                    "&::before": {
                      content: '"▹"',
                      position: "absolute",
                      left: "0px",
                      color: "var(--primary-main)",
                    },
                  }}
                >
                  {list}
                </Box>
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
