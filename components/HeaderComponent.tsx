import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import {
  AppBar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function HeaderComponent() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpen() {
    setModalOpen((prev) => !prev);
  }

  return (
    <>
      <AppBar
        position="sticky"
        elevation={3}
        sx={{
          height: "64px",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1450px",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <Typography
              variant="h6"
              color="secondary"
              sx={{ cursor: "pointer", width: "fit-content" }}
            >
              Star Wars
            </Typography>
          </Link>
          <IconButton color="secondary" onClick={handleOpen}>
            <InfoIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Dialog
        open={modalOpen}
        onClose={handleOpen}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        fullWidth={true}
      >
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "7px 0",
              paddingTop: "2px",
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="secondary">
              About
            </Typography>
            <IconButton
              aria-label="close"
              onClick={handleOpen}
              sx={{
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
        </DialogTitle>
        <DialogContent sx={{ margin: "10px 0" }}>
          <Typography variant="body1" gutterBottom color="secondary">
            Hello there, my name is <strong>Davor</strong>. I&apos;m a full
            stack web developer from Serbia.
          </Typography>
          <Typography variant="body1" gutterBottom={true} color="secondary">
            This is a project made during my learning journey at one web
            development course at Udemy.
          </Typography>
          <Typography variant="body1" gutterBottom color="secondary">
            • Components are provided by{" "}
            <strong>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://material-ui.com/"
              >
                Material UI
              </a>
            </strong>
          </Typography>
          <Typography variant="body1" gutterBottom color="secondary">
            • Star Wars API by{" "}
            <strong>
              <a target="_blank" rel="noreferrer" href="https://swapi.dev/">
                SWAPI (.dev)
              </a>
            </strong>
          </Typography>
          <Typography variant="body1" gutterBottom color="secondary">
            • Images are being sourced from{" "}
            <strong>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://starwars-visualguide.com/"
              >
                Star Wars Visual Guide
              </a>
            </strong>
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default HeaderComponent;
