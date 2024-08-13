// In reviewbetmodal.js
import React from "react";
import { Modal, Box, Typography, Button, Grid, Divider } from "@mui/material";
import "material-symbols";
import { useRouter } from "next/navigation";

export default function ReviewBetModal({ open, handleClose }) {
  const router = useRouter();

  const handleConfirm = () => {
    router.push("/recieptpage");
    handleClose(); // Close the modal
    // Navigate to the next page (replace '/nextpage' with the actual path)
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalStyles }}>
        <h6 style={{ fontFamily: "Adca" }}>Review Your Bet</h6>
        <Box>
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
        <Box style={{ background: "#FFF6EB" }}>
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
                    ABC-abc-1234
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
            <Button variant="outlined" type="submit">
              Remove
            </Button>
          </Grid>
          <Divider
            sx={{
              borderRadius: 3,
              borderStyle: "dashed",
              borderBottomWidth: 2,
            }}
          />
          {/* Total Bet */}
          <Grid container alignItems="center" justifyContent="end" spacing={0}>
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
        {/* Confirm Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleConfirm}
          sx={{ mt: 2 }}
        >
          Confirm
        </Button>

        {/* Close Button */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClose}
          sx={{ mt: 2, ml: 2 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
