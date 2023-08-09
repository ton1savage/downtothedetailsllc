import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets/logo", false, /\.(png|PNG|jpe?g|svg)$/)
);

const logo = heroTextureImports["IMG_5789.PNG"]

function Navbar() {
  const navigate = useNavigate();
  const breakPoint = useMediaQuery("(min-width:560px)");
  const breakPointTwo = useMediaQuery("(min-width:1090px)");
  const showTypography = breakPointTwo; // Show Typography when breakPoint is false (screen width < 600px)

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      backgroundColor="black"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="90%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box 
          display='flex' 
          alignItems='center' 
          columnGap='20px'
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }} 
        >
          <img src={logo} alt="Washing" style={{ width: '150px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
          {showTypography && (
            <Typography variant="h2" style={{ color: "white" }}>
              Down To The Details L.L.C.
            </Typography>
          )}
        </Box>
        <Box
          display="flex"
          zIndex="2"
        >
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: "flex", flexDirection: breakPoint ? "row" : "column" }}>
            <li style={{ display: 'inline-block', marginLeft: breakPoint ? '15px' : '0', marginBottom: breakPoint ? '0' : '10px' }}>
              <ScrollLink to="services" smooth={true} duration={500} className="nav-link" offset={-100}>
                SERVICES
              </ScrollLink>
            </li>
            <li style={{ display: 'inline-block', marginLeft: breakPoint ? '15px' : '0', marginBottom: breakPoint ? '0' : '10px' }}>
              <ScrollLink to="about" smooth={true} duration={500} className="nav-link">
                ABOUT US
              </ScrollLink>
            </li>
            <li style={{ display: 'inline-block', marginLeft: breakPoint ? '15px' : '0', marginBottom: breakPoint ? '0' : '10px' }}>
              <ScrollLink to="quote" smooth={true} duration={500} className="nav-link">
                QUOTE
              </ScrollLink>
            </li>
            <li style={{ display: 'inline-block', marginLeft: breakPoint ? '15px' : '0', marginBottom: breakPoint ? '0' : '10px' }}>
              <ScrollLink to="footer" smooth={true} duration={500} className="nav-link">
                CONTACT
              </ScrollLink>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;