"use client";
import React from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Grid,
  IconButton,
  Link,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Typography,
  Divider,
} from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";
import "material-symbols";
import { useState } from "react";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RecieptPage() {
  const router = useRouter();
  const handlePrint = () => {
    window.print();
  };

  const handleAdd = () => {
    router.push("/addbet");
  };
  return (
    <Container className={roboto.className}>
      <Box>
        <span
          className="material-symbols-outlined"
          style={{ color: "#F1690F", fontSize: "50px" }}
        >
          check_circle
        </span>
        <h2 style={{ fontFamily: "Adca" }}>Payment Success</h2>

        <Box style={{ background: "#FFF6EB" }}>
          <Box justifyContent="center">
            <h3>Reference Number</h3>
            <h2>ABC-abc-1234</h2>
            <Grid container>
              <Grid item>
                <span class="material-symbols-outlined">today</span>
              </Grid>
              <Grid item>08/01/2024</Grid>
            </Grid>
          </Box>
          {/* Item */}
          <Box>
            <Grid
              container
              direction="column"
              spacing={0}
              padding={1}
              style={{ background: "#FFF6EB" }}
            >
              {/* First Row */}
              <Grid item>
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      AB, 34, 46
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">₱ 200, 000</Typography>
                  </Grid>
                </Grid>
              </Grid>

              {/* Second Row */}
              <Grid item>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={0}
                >
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
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
                          <Typography
                            variant="body2"
                            style={{ color: "#79747E" }}
                          >
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
                          <Typography
                            variant="body2"
                            style={{ color: "#79747E" }}
                          >
                            2PM
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ color: "#79747E" }}>
                      Expectec Wins: Php 20,000
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider
              sx={{
                borderRadius: 3,
                borderStyle: "dashed",
                borderBottomWidth: 2,
              }}
            />
            {/* Total Bet */}
            <Grid
              container
              alignItems="center"
              justifyContent="end"
              spacing={0}
            >
              <Grid container justifyContent="end" spacing={2}>
                <Grid item>
                  <Typography variant="h6">TOTAL BET</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    PHP 20,000
                  </Typography>
                </Grid>
              </Grid>
              {/* Expected Wins */}
              <Grid container justifyContent="end" spacing={1}>
                <Grid item>
                  <Typography variant="body2">Total Expected Wins:</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">PHP 100,000</Typography>
                </Grid>
              </Grid>
              {/* Total Games */}
              <Grid container justifyContent="end" spacing={1}>
                <Grid item>
                  <Typography variant="body2">Total Games:</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">03</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary" onClick={handlePrint}>
            Print Receipt
          </Button>

          <Button variant="contained" color="primary" onClick={handleAdd}>
            Exit Page
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
