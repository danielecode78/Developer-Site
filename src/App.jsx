import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import PageSwitch from "./components/PageSwitch.jsx";
import Footer from "./components/Footer.jsx";
import { Container, createTheme, ThemeProvider, Box } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Franklin Gothic Heavy, sans-serif",
          letterSpacing: "0.15em",
        },
      },
    },
  },
});

function App() {
  const [page, setPage] = useState("progetti");

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          <Navbar clickPage={(newPage) => setPage(newPage)} />
          <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="lg" sx={{ py: 6 }}>
              <PageSwitch page={page} />
            </Container>
          </Box>
          <Footer sx={{ mt: "auto" }} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
