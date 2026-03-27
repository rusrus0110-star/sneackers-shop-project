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

    h4: {
      fontWeight: 700,
      fontSize: "2rem", // Cart title
    },

    h5: {
      fontWeight: 700,
      fontSize: "1.25rem", // Summary title, Total price
    },

    h6: {
      fontWeight: 600,
      fontSize: "1.125rem", // Item price
    },

    body1: {
      fontWeight: 500,
      fontSize: "1rem", // Item name
    },

    body2: {
      fontSize: "0.875rem", // Summary items list
      color: "#6b7280",
    },

    caption: {
      fontSize: "0.75rem", // PRICE: label
      color: "#6b7280",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
  },

  shape: {
    borderRadius: 12,
  },

  spacing: 8,

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          "&.MuiContainer-root": {
            paddingLeft: "120px",
            paddingRight: "120px",
          },

          "@media (max-width:1200px)": {
            "&.MuiContainer-root": {
              paddingLeft: "140px",
              paddingRight: "140px",
            },
          },

          "@media (max-width:600px)": {
            "&.MuiContainer-root": {
              paddingLeft: "24px",
              paddingRight: "24px",
            },
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          fontWeight: 500,
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

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h4: "h1",
          h5: "h2",
          h6: "h3",
          body1: "p",
          body2: "p",
          caption: "span",
        },
      },
    },
  },
});

export default theme;
