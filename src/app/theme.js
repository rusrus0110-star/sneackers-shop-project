import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

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
      fontSize: "2rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },

    h5: {
      fontWeight: 700,
      fontSize: "1.25rem",
    },

    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
    },

    body1: {
      fontWeight: 500,
      fontSize: "1rem",
    },

    body2: {
      fontSize: "0.875rem",
      color: "#6b7280",
    },

    caption: {
      fontSize: "0.75rem",
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
        maxWidth: false,
      },

      styleOverrides: {
        root: {
          width: "100%",
          paddingLeft: "120px !important",
          paddingRight: "120px !important",

          "@media (max-width:1024px)": {
            paddingLeft: "96px !important",
            paddingRight: "96px !important",
          },

          "@media (max-width:820px)": {
            paddingLeft: "48px !important",
            paddingRight: "48px !important",
          },

          "@media (max-width:599px)": {
            paddingLeft: "16px !important",
            paddingRight: "16px !important",
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
          width: "100%",
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
