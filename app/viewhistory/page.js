"use client";
import { ArrowBackIos } from "@mui/icons-material";
import {
  Container,
  Grid,
  IconButton,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { Roboto } from "next/font/google";
import "material-symbols";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ViewTransaction from "./view";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function ViewHistory() {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container className={roboto.className}>
      <Grid container spacing={12}>
        <Grid item>
          <IconButton aria-label="arrowbackios" size="small" onClick={goBack}>
            <ArrowBackIos fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid item>
          <h3 style={{ fontFamily: "Adca" }}>Transaction History</h3>
        </Grid>
      </Grid>
      {/* list of transactions */}
      <Grid container rowSpacing={2}>
        <Grid item>
          <Typography variant="h6" style={{ fontWeight: "bold" }} gutterBottom>
            August 01, 2024
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          spacing={0}
          padding={1}
          style={{ background: "#FFF6EB" }}
        >
          {/* First Row: Title and Amount */}
          <Grid item>
            <Grid
              container
              alignContent="center"
              justifyContent="space-between"
            >
              <Grid item>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  ABC-abc-1234
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">₱ 200, 000</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Second Row: Icons and Button */}
          <Grid item>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              spacing={0}
            >
              <Grid item>
                <Grid container direction="row" alignItems="center" spacing={1}>
                  {/* First group: Icon and Text */}
                  <Grid container item xs="auto" alignItems="center">
                    <Grid item>
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "#79747E" }}
                      >
                        ifl
                      </span>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ color: "#79747E" }}>
                        A3D
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* Second group: Alarm Icon and Time */}
                  <Grid container item xs="auto" alignItems="center">
                    <Grid item>
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "#79747E" }}
                      >
                        alarm
                      </span>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ color: "#79747E" }}>
                        2PM
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  style={{ color: "#B12D0C" }}
                  onClick={handleOpenModal}
                >
                  Click to View
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          spacing={0}
          padding={1}
          style={{ background: "#FFF6EB" }}
        >
          {/* First Row: Title and Amount */}
          <Grid item>
            <Grid
              container
              alignContent="center"
              justifyContent="space-between"
            >
              <Grid item>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  ABC-abc-1234
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">₱ 200, 000</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Second Row: Icons and Button */}
          <Grid item>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              spacing={0}
            >
              <Grid item>
                <Grid container direction="row" alignItems="center" spacing={1}>
                  {/* First group: Icon and Text */}
                  <Grid container item xs="auto" alignItems="center">
                    <Grid item>
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "#79747E" }}
                      >
                        ifl
                      </span>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ color: "#79747E" }}>
                        A3D
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* Second group: Alarm Icon and Time */}
                  <Grid container item xs="auto" alignItems="center">
                    <Grid item>
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "#79747E" }}
                      >
                        alarm
                      </span>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ color: "#79747E" }}>
                        2PM
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  style={{ color: "#B12D0C" }}
                  onClick={handleOpenModal}
                >
                  Click to View
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ViewTransaction open={modalOpen} onClose={handleCloseModal} />
    </Container>
  );
}
