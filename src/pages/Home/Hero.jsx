import { Box } from "@mui/material";

import logo from "../../assets/hero/logo.png";
import oneText from "../../assets/hero/ONE.png";
import airText from "../../assets/hero/AIR.png";
import upToText from "../../assets/hero/up-to.png";
import offText from "../../assets/hero/50-off.png";
import shoesTop from "../../assets/hero/shoes-2.png";
import shoesBottom from "../../assets/hero/shoes.png";

const Hero = () => {
  return (
    <Box sx={{ pt: { xs: 2, md: 4 } }}>
      <Box sx={{ overflow: "hidden", position: "relative" }}>
        {/* ================= TOP SECTION ================= */}
        <Box
          sx={{
            position: "relative",
            height: { xs: 180, sm: 195, md: 195 },
            background: "linear-gradient(180deg, #6f8fc5 0%, #4f6fa5 100%)",
            zIndex: 2,
          }}
        >
          {/* LOGO  */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 8, md: 10 },
              left: { xs: 12, md: 15 },
              width: { xs: 36, md: 42 },
              height: { xs: 36, md: 42 },
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
                width: { xs: 20, md: 24 },
              }}
            />
          </Box>

          {/* ONE */}
          <Box
            component="img"
            src={oneText}
            sx={{
              position: "absolute",
              left: { xs: 15, md: 20 },
              bottom: { xs: 8, md: 10 },
              width: { xs: 200, sm: 230, md: 260 },
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
              left: { xs: "50%", sm: "48%", md: 200 },
              transform: { xs: "translateX(-50%)", md: "none" },
              top: { xs: 5, md: 1 },
              width: { xs: 200, sm: 230, md: 260 },
              zIndex: 3,
            }}
          />

          {/* UP TO */}
          <Box
            component="img"
            src={upToText}
            sx={{
              position: "absolute",
              right: { xs: "28%", sm: "25%", md: 160 },
              top: { xs: 15, md: 20 },
              width: { xs: 55, md: 70 },
              zIndex: 3,
            }}
          />

          {/* 50% OFF */}
          <Box
            component="img"
            src={offText}
            sx={{
              position: "absolute",
              right: { xs: 15, sm: 50, md: 80 },
              top: { xs: 40, md: 50 },
              width: { xs: 180, sm: 210, md: 240 },
              zIndex: 3,
            }}
          />
        </Box>

        {/* ================= BOTTOM SECTION ================= */}
        <Box
          sx={{
            position: "relative",
            height: { xs: 140, sm: 160, md: 180 },
            background: "linear-gradient(180deg, #dcdcdc 0%, #bfbfbf 100%)",
            mt: { xs: "-30px", md: "-40px" },
            zIndex: 1,
          }}
        >
          {/* AIR */}
          <Box
            component="img"
            src={airText}
            sx={{
              position: "absolute",
              left: { xs: 15, md: 20 },
              bottom: { xs: 8, md: 10 },
              width: { xs: 200, sm: 230, md: 260 },
              opacity: 0.2,
            }}
          />

          {/* SHOES BOTTOM */}
          <Box
            component="img"
            src={shoesBottom}
            sx={{
              position: "absolute",
              left: { xs: "65%", sm: "68%", md: "70%" },
              transform: "translateX(-50%)",
              width: { xs: "85%", sm: "75%", md: "70%" },
              maxWidth: { xs: 320, md: 400 },
              bottom: { xs: "-8px", md: "-10px" },
              zIndex: 2,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
