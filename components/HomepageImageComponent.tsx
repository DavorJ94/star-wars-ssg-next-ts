import { Button, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type HomepageImageComponentProps = {
  data: { imgUrl: string; redirectUrl: string; title: string };
};

function HomepageImageComponent({ data }: HomepageImageComponentProps) {
  return (
    <Paper
      square
      sx={{
        width: "350px",
        height: "250px",
        position: "relative",
      }}
      title={data.title}
      elevation={3}
    >
      <Image
        src={data.imgUrl}
        alt="character"
        loader={({ width }) => data.imgUrl + `?width=${width}`}
        priority={true}
        layout="fill"
        style={{
          filter: "brightness(0.5)",
        }}
      />
      <Link href={data.redirectUrl}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            "&:hover": {
              bgcolor: "secondary.main",
              color: "#333",
            },
          }}
        >
          {data.title}
        </Button>
      </Link>
    </Paper>
  );
}

export default HomepageImageComponent;
