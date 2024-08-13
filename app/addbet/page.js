"use client";
import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Grid,
  IconButton,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Chip,
  Stack,
  styled,
} from "@mui/material";
import { History, Logout } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";
import "material-symbols";
import ReviewBetModal from "./reviewbetmodal";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

// Styled component for the chip container inside the TextField
const InputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  border: "1px solid",
  borderRadius: theme.shape.borderRadius,
  padding: "8px",
  borderColor: theme.palette.text.primary,
}));

export default function AddBet() {
  const [schedule, setSchedule] = React.useState("");
  const [game, setGame] = React.useState("");
  const [openModal, setOpenModal] = useState(false);
  const [chips, setChips] = useState([]); // State to manage list of chips
  const [inputValue, setInputValue] = useState(""); // State to manage input value for chips

  const handleScheduleChange = (event) => {
    setSchedule(event.target.value);
  };

  const handleviewHistory = (event) => {
    event.preventDefault();
    router.push("/viewhistory");
  };

  const handleGameChange = (event) => {
    setGame(event.target.value);
  };

  // textfield values
  const [combi, setCombi] = useState("");
  const [bet, setBet] = useState("");

  // error textfield values
  const [combiError, setCombiError] = useState("");
  const [betError, setBetError] = useState("");

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    let hasError = false; // Flag to check if there are validation errors

    // Reset previous error messages
    setCombiError("");
    setBetError("");

    // Validate combi
    if (!combi) {
      setCombiError("Combination is required"); // Set error message if combi is empty
      hasError = true; // Set flag indicating an error
    }

    // Validate bet
    if (!bet) {
      setBetError("Bet amount is required"); // Set error message if bet is empty
      hasError = true; // Set flag indicating an error
    }

    // If there are validation errors, stop form submission
    if (hasError) return;
  };

  const handleLogout = () => {
    router.push("/");
    // Navigate to the next page (replace '/nextpage' with the actual path)
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  // Add a new chip
  const handleAddChip = () => {
    if (inputValue && !chips.includes(inputValue)) {
      setChips([...chips, inputValue]);
      setInputValue(""); // Clear input field after adding chip
    }
  };

  // Delete an existing chip
  const handleDeleteChip = (chipToDelete) => {
    setChips(chips.filter((chip) => chip !== chipToDelete));
  };

  // Update input value for chips
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Add chip when Enter key is pressed
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddChip();
    }
  };

  return (
    <Container className={roboto.className}>
      <Grid container>
        <Grid item xs>
          <h2 style={{ fontFamily: "Adca" }}>
            Hello <span style={{ color: "#F88E27" }}>UserName</span>
          </h2>
        </Grid>
        <Grid xs="auto" container>
          <Grid item>
            <IconButton aria-label="history" onClick={handleviewHistory}>
              <History />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="logout" onClick={handleLogout}>
              <Logout />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Box>
        <span
          className="material-symbols-outlined"
          style={{ color: "#F1690F", fontSize: "100px" }}
        >
          ar_stickers
        </span>
        <h3 style={{ fontFamily: "Adca" }}>Place Your Bet</h3>
      </Box>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        {/* DropDown Schedule */}
        <FormControl sx={{ width: "100%", mt: 1 }}>
          <InputLabel id="demo-select-small-label">Schedule</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={schedule}
            label="Schedule"
            onChange={handleScheduleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>2:00 PM</MenuItem>
            <MenuItem value={20}>5:00 PM</MenuItem>
            <MenuItem value={30}>9:00 PM</MenuItem>
          </Select>
        </FormControl>

        {/* DropDown Game */}
        <FormControl sx={{ width: "100%", mt: 2 }}>
          <InputLabel id="demo-select-small-label">Game</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={game}
            label="Game"
            onChange={handleGameChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>A2D</MenuItem>
            <MenuItem value={20}>A3D</MenuItem>
            <MenuItem value={30}>A4D</MenuItem>
            <MenuItem value={40}>B2D</MenuItem>
            <MenuItem value={50}>B3D</MenuItem>
          </Select>
        </FormControl>

        {/* Chips and Input Field */}
        <InputContainer sx={{ mt: 2 }}>
          {chips.map((chip) => (
            <Chip
              key={chip}
              label={chip}
              onDelete={() => handleDeleteChip(chip)} // Handle chip deletion
              sx={{ margin: 0.5 }} // Adjust margin for better alignment
            />
          ))}
          <TextField
            variant="standard"
            placeholder="Enter to Add Combination"
            value={inputValue}
            onChange={handleInputChange} // Update input value
            onKeyDown={handleKeyDown} // Add chip on Enter key press
            sx={{ flex: 1, marginLeft: 1 }} // Adjust styling to fit within container
            InputProps={{ disableUnderline: true }} // Remove underline for seamless look
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            error={Boolean(combiError)}
            helperText={combiError}
          />
        </InputContainer>

        {/* Bet Amount */}
        <TextField
          margin="normal"
          required
          fullWidth
          name="bet"
          label="Place Your Bet"
          type="number"
          id="bet"
          value={bet}
          onChange={(e) => setBet(e.target.value)}
          error={Boolean(betError)}
          helperText="Until Php 2,000 Only"
        />

        <Grid container alignItems="center" spacing={2} sx={{ mt: 2 }}>
          <Grid item>
            <Button size="medium" variant="contained" sx={{ mt: 3, mb: 2 }}>
              ADD BET
            </Button>
          </Grid>
          <Grid item>
            <Button size="medium" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Button variant="outlined" onClick={() => setOpenModal(true)}>
            REVIEW BETS
          </Button>
        </Grid>
      </Grid>
      <ReviewBetModal open={openModal} handleClose={handleCloseModal} />
    </Container>
  );
}
