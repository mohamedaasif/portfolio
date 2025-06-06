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
          color: darkTheme
            ? "var(--dark_accent_color)"
            : "var(--light_accent_color)",
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
                  transition:
                    "background 0.3s ease, color 0.3s ease, border 0.3s ease",
                  borderLeft: {
                    xs: "none",
                    md:
                      data === selectItem
                        ? darkTheme
                          ? "2px solid var(--dark_accent_color)"
                          : "2px solid var(--light_accent_color)"
                        : darkTheme
                        ? "2px solid var(--dark_secondary_text_color)"
                        : "2px solid var(--light_secondary_text_color)",
                  },
                  borderBottom: {
                    xs:
                      data === selectItem
                        ? darkTheme
                          ? "2px solid var(--dark_accent_color)"
                          : "2px solid var(--light_accent_color)"
                        : darkTheme
                        ? "2px solid var(--dark_secondary_text_color)"
                        : "2px solid var(--light_secondary_text_color)",
                    md: "none",
                  },
                  color:
                    data === selectItem
                      ? darkTheme
                        ? "var(--dark_accent_color)"
                        : "var(--light_accent_color)"
                      : "inherit",
                  background:
                    data === selectItem
                      ? darkTheme
                        ? "rgba(250, 250, 250, 0.05)"
                        : "rgba(236, 236, 236, 0.5)"
                      : "transparent",
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
                fontFamily: "var(--ff-semibold)",
                fontSize: "24px",
                mb: "24px",
              }}
            >
              {jobTitle[selectItem].title}
            </Box>
            <Box
              sx={{
                color: darkTheme
                  ? "var(--dark_secondary_text_color)"
                  : "var(--light_secondary_text_color)",
                fontFamily: "var(--ff-regular)",
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
                    fontFamily: "var(--ff-regular)",
                    fontSize: "14px",
                    mb: "24px",
                    position: "relative",
                    paddingLeft: "30px",
                    "&::before": {
                      content: '"▹"',
                      position: "absolute",
                      left: "0px",
                      color: darkTheme
                        ? "var(--dark_accent_color)"
                        : "var(--light_accent_color)",
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
