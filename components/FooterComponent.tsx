import { Paper, Typography } from "@mui/material";

const FooterComponent = () => {
  return (
    <Paper
      square
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:
          "0px -3px 3px -2px rgba(0,0,0,0.2),0px -3px 4px 0px rgba(0,0,0,0.14),0px -1px 8px 0px rgba(0,0,0,0.12)",
        height: "60px",
        position: "absolute",
        bottom: 0,
        width: "100%",
        marginTop: "20px",
      }}
    >
      <Typography variant="body1" component="p">
        {" "}
        By{" "}
        <Typography
          component="a"
          href="https://www.linkedin.com/in/davor-jovanovi%C4%87/"
          target="_blank"
          variant="body1"
          fontWeight="bold"
          letterSpacing={0.75}
          color="secondary"
          rel="noreferrer"
          sx={{
            "&:hover": {
              color: "goldenrod",
            },
          }}
        >
          {" "}
          DavorJ
        </Typography>
      </Typography>
    </Paper>
  );
};

export default FooterComponent;
