import { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ clickPage }) {
  const audio = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [clicked, setClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const menuItems = [
    { label: "Progetti", value: "progetti" },
    { label: "Chi Sono", value: "chi-sono" },
    { label: "Contatti", value: "contatti" },
  ];

  if (!audio.current) {
    audio.current = new Audio(`${import.meta.env.BASE_URL}/title.mp3`);
    audio.current.preload = "auto";
    audio.current.load();
  }

  audio.current.onplay = () => {
    setIsPlaying(true);
    setClicked(true);
  };

  audio.current.onended = () => {
    setIsPlaying(false);
    setClicked(false);
  };

  const titleClick = () => {
    if (isPlaying) return;
    audio.current.play();
  };

  const handleClick = (value) => {
    clickPage(value);
    setDrawerOpen(false);
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#121212",
          color: "#ffffff",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontFamily: "Franklin Gothic Heavy",
              letterSpacing: "0.15em",
              transition: "all 2s ease",
              "&:hover": {
                textShadow: "0 0 20px #fff, 0 0 40px #f0f, 0 0 60px #0ff",
                filter: "brightness(200%)",
              },
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            <span
              id="title"
              className={`text-title ${clicked ? "text-gold" : ""}`}
              onClick={titleClick}
            >
              DANIELE CODE DEVELOPER SITE
            </span>
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <List>
                  {menuItems.map((item) => (
                    <ListItemButton
                      key={item.value}
                      onClick={() => handleClick(item.value)}
                    >
                      {item.label}
                    </ListItemButton>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            menuItems.map((item) => (
              <Button
                sx={{
                  transition: "all 0.5s ease",

                  "&:hover": {
                    color: "#bfa14c",
                    textShadow: `
      0 0 10px #bfa14c,
      0 0 20px #a67c00,
      0 0 30px #8b6f29
    `,
                    filter: "brightness(150%)",

                    transform: "translateY(-1px)",
                  },
                }}
                key={item.value}
                color="inherit"
                onClick={() => handleClick(item.value)}
              >
                {item.label}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
