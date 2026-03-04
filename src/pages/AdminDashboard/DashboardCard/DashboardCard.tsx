import { Typography, Box } from "@mui/material";

interface DashboardCardProps {
  count: number;
  title: string;
}

const DashboardCard = ({ count, title }: DashboardCardProps) => {
  return (
    <Box
      sx={{
        background: "var(--light_bg_color)",
        borderRadius: "8px",
        width: "150px",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>{count}</Typography>
      <Typography>{title}</Typography>
    </Box>
  );
};

export default DashboardCard;
