import { Box } from "@mui/material";

import logo from "../../assets/hero/logo.png";
import oneText from "../../assets/hero/ONE.png";
import airText from "../../assets/hero/AIR.png";
import upToText from "../../assets/hero/up-to.png";
import offText from "../../assets/hero/50-off.png";
import shoesTop from "../../assets/hero/shoes-2.png";
import shoesBottom from "../../assets/hero/shoes.png";

const TOP_SECTION_HEIGHT = 195;
const BOTTOM_SECTION_HEIGHT = 180;

const Hero = () => {
  return (
    <Box sx={{ pt: 4 }}>
      <Box sx={{ overflow: "hidden", position: "relative" }}>
        {/* ================= TOP SECTION ================= */}
        <Box
          sx={{
            position: "relative",
            height: TOP_SECTION_HEIGHT,
            background: "linear-gradient(180deg, #6f8fc5 0%, #4f6fa5 100%)",
            zIndex: 2,
          }}
        >
          {/* LOGO  */}
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 15,
              width: 42,
              height: 42,
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 5,
            }}
          >
            <Box
              component="img"
              src={logo}
              sx={{
                width: 24,
              }}
            />
          </Box>

          {/* ONE */}
          <Box
            component="img"
            src={oneText}
            sx={{
              position: "absolute",
              left: 20,
              bottom: 10,
              width: 260,
              opacity: 0.2,
              zIndex: 1,
            }}
          />

          {/* SHOES TOP */}
          <Box
            component="img"
            src={shoesTop}
            sx={{
              position: "absolute",
              left: 200,
              top: 1,
              width: 260,
              zIndex: 3,
            }}
          />

          {/* UP TO */}
          <Box
            component="img"
            src={upToText}
            sx={{
              position: "absolute",
              right: 160,
              top: 20,
              width: 70,
              zIndex: 3,
            }}
          />

          {/* 50% OFF */}
          <Box
            component="img"
            src={offText}
            sx={{
              position: "absolute",
              right: 80,
              top: 50,
              width: 240,
              zIndex: 3,
            }}
          />
        </Box>

        {/* ================= BOTTOM SECTION ================= */}
        <Box
          sx={{
            position: "relative",
            height: BOTTOM_SECTION_HEIGHT,
            background: "linear-gradient(180deg, #dcdcdc 0%, #bfbfbf 100%)",
            mt: "-40px",
            zIndex: 1,
          }}
        >
          {/* AIR */}
          <Box
            component="img"
            src={airText}
            sx={{
              position: "absolute",
              left: 20,
              bottom: 10,
              width: 260,
              opacity: 0.2,
            }}
          />

          {/* SHOES BOTTOM */}
          <Box
            component="img"
            src={shoesBottom}
            sx={{
              position: "absolute",
              left: "70%",
              transform: "translateX(-50%)",
              width: "70%",
              maxWidth: 400,
              bottom: "-10px",
              zIndex: 2,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
