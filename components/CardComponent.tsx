import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  Container,
  ContainerProps,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useState } from "react";

const NoPaddingContainer = styled(Container)<ContainerProps>(() => ({
  padding: "0px !important",
}));

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  Component: React.ReactNode;
};

function CardComponent({
  imageSrc,
  title,
  description,
  Component: AccordionComponent,
}: CardProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [imageError, setImageError] = useState(false);

  function handleCollapse() {
    setIsCollapsed((prev) => !prev);
  }
  return (
    <Container
      sx={{
        bgcolor: "secondary.main",
        color: "primary.main",
        borderRadius: "5px",
        padding: "0 !important",
        maxWidth: "350px !important",
        overflow: "hidden",
      }}
      component="article"
    >
      <Paper
        sx={{
          width: "100%",
          height: "200px",
          position: "relative",
        }}
        title={title}
        elevation={3}
      >
        <Image
          src={imageError ? "/images/big-placeholder.jpeg" : imageSrc}
          loader={({ width, src }) => src + `?width=${width}`}
          alt={title}
          layout="fill"
          priority
          objectFit="cover"
          objectPosition="center"
          onError={() => setImageError(true)}
        />
      </Paper>
      <Container sx={{ padding: "10px !important" }} component="div">
        <Typography variant="h6" component="h2">
          {title}
        </Typography>

        {description.split("newLine").map((item, index) => (
          <Typography key={index} variant="body2" component="h4">
            {item}
          </Typography>
        ))}

        <NoPaddingContainer
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <IconButton
            sx={{ marginLeft: "auto" }}
            color="primary"
            onClick={handleCollapse}
          >
            <ExpandMoreIcon
              sx={{
                transform: isCollapsed ? "rotate(180deg)" : "",
                transition: "transform 0.3s ease",
              }}
            />
          </IconButton>
        </NoPaddingContainer>
        <Collapse in={isCollapsed}>{AccordionComponent}</Collapse>
      </Container>
    </Container>
  );
}

export default CardComponent;
