import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "sticky",
        width: "100%",
        bgcolor: "#121212",
        color: "#ffffff",
        py: 3,
        zIndex: 10,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © 2025 DanieleCode – Developer Site. Tutti i diritti riservati.
        </Typography>
      </Container>
    </Box>
  );
}
