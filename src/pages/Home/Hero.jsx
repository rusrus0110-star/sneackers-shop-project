import { Box } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        mt: 3,
        height: { xs: 180, md: 260 },
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        background: "#5c78a5",
      }}
    >
      <Box
        component="img"
        src="/assets/hero/AIR.png"
        sx={{
          position: "absolute",
          left: 20,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.15,
          height: 90,
        }}
      />

      <Box
        component="img"
        src="/assets/hero/ONE.png"
        sx={{
          position: "absolute",
          left: 30,
          bottom: 20,
          height: 60,
        }}
      />

      <Box
        component="img"
        src="/assets/hero/UP_TO.png"
        sx={{
          position: "absolute",
          right: 120,
          top: 40,
          height: 20,
        }}
      />

      <Box
        component="img"
        src="/assets/hero/50_OFF.png"
        sx={{
          position: "absolute",
          right: 40,
          top: 60,
          height: 60,
        }}
      />

      <Box
        component="img"
        src="/assets/hero/shoes.png"
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%) rotate(-10deg)",
          height: { xs: 120, md: 180 },
        }}
      />

      <Box
        component="img"
        src="/assets/hero/logo.png"
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          height: 30,
        }}
      />
    </Box>
  );
};

export default Hero;
