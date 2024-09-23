import { Box } from "@mui/material";
// import styles from "./Experience.module.scss";
import { experience } from "../../utils/globalValues";
import { useState } from "react";
const Experience = () => {
  const [selectId, setSelectId] = useState<number>(0);
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
            width: "fit-content",
            height: "auto",
          }}
        >
          {experience.map((data: string, idx: number) => (
            <Box
              onClick={() => setSelectId(idx)}
              key={idx}
              sx={{
                padding: "15px 30px",
                cursor: "pointer",
                fontSize: "16px",
                fontFamily: "var(--ff-medium)",
                borderLeft:
                  idx === selectId
                    ? "2px solid var(--primary-main)"
                    : "2px solid var(--text-grey-800)",
                color: idx === selectId ? "var(--primary-main)" : "inherit",
                "&:hover": {
                  background: "rgba(250, 250, 250, 0.05)",
                },
              }}
            >
              {data}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
