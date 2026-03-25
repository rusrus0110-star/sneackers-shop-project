import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#0d1117",
    },

    secondary: {
      main: "#6f89b7",
    },

    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },

    text: {
      primary: "#0d1117",
      secondary: "#6b7280",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h3: {
      fontWeight: 700,
      fontSize: "2rem",
    },

    h5: {
      fontWeight: 600,
    },

    body1: {
      fontSize: "0.95rem",
    },
  },

  shape: {
    borderRadius: 12,
  },

  spacing: 8,

  components: {
    /* 🔥 ГЛАВНОЕ — Container */
    MuiContainer: {
      defaultProps: {
        maxWidth: "md", // 👈 уже уже, как в макете
      },
      styleOverrides: {
        root: {
          paddingLeft: "24px",
          paddingRight: "24px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#2c2c2c",
        },
      },
    },
  },
});

export default theme;
