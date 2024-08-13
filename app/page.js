"use client";
import { Container, Box, TextField, Button, Grid, Link } from "@mui/material";
import { OrangeSlice } from "@phosphor-icons/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  // textfield values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error textfield values
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    let hasError = false; // Flag to check if there are validation errors

    // Reset previous error messages
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!email) {
      setEmailError("Email is required"); // Set error message if email is empty
      hasError = true; // Set flag indicating an error
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required"); // Set error message if password is empty
      hasError = true; // Set flag indicating an error
    }

    // If there are validation errors, stop form submission
    if (hasError) return;

    // If no errors, perform the submit logic
    push("/addbet");
  };

  return (
    <Container>
      <Box>
        <OrangeSlice size={32} weight="fill" />
        <h1 style={{ fontFamily: "Adca" }}>ORANGE</h1>
      </Box>
      <Box>
        <h1 style={{ fontFamily: "Adca" }}>
          Welcome to <span style={{ color: "#F88E27" }}>ORANGE</span>
        </h1>
      </Box>

      {/* Form for the email and password */}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          error={Boolean(emailError)} // Show error state if emailError is not empty
          helperText={emailError} // Display error message if emailError is not empty
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
          error={Boolean(passwordError)} // Show error state if passwordError is not empty
          helperText={passwordError} // Display error message if passwordError is not empty
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
