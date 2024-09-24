import { Box } from "@mui/material";
// import styles from "./Experience.module.scss";
import {
  experience,
  experienceInDetails,
  jobTitle,
} from "../../utils/globalValues";
import { useContext, useState } from "react";
import { ThemeContext, ThemeContextType } from "../../ThemeContext";
const Experience = () => {
  const [selectItem, setSelectItem] = useState<string>(experience[0]);
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );
  return (
    <Box
      sx={{
        width: "50%",
        margin: "0 auto",
        mb: "120px",
        height: "calc(100vh - 60px)",
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
        Where I've Worked
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
          }}
        >
          <Box>
            {experience.map((data: string, idx: number) => (
              <Box
                onClick={() => setSelectItem(data)}
                key={idx}
                sx={{
                  width: "120px",
                  padding: "15px 30px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontFamily: "var(--ff-medium)",
                  borderLeft:
                    data === selectItem
                      ? "2px solid var(--primary-dark)"
                      : darkTheme
                      ? "2px solid var(--text-grey-800)"
                      : "2px solid var(--grey-color-dark)",
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
