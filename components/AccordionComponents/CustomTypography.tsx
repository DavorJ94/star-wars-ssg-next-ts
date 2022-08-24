import { Typography } from "@mui/material";

type CustomTypographyProps = { children: React.ReactNode };

function CustomTypography({ children }: CustomTypographyProps) {
  return (
    <Typography
      variant="body1"
      component="p"
      sx={{
        "& > span ": {
          textTransform: "capitalize",
        },
      }}
    >
      {children}
    </Typography>
  );
}

export default CustomTypography;
