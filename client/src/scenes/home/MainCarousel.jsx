import { Carousel } from "react-responsive-carousel";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AppointmentForm from "./AppointmentForm";
import animationData from './popInsta.json';
import Lottie from "lottie-react";

// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg|)$/)
);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <div id="top">
      <Box position='relative'>
        <a
          href="https://www.instagram.com/down2the_detail/?igshid=YmMyMTA2M2Y%3D"
          target="_blank" // This will open the link in a new tab
          rel="noopener noreferrer" // For security and performance reasons
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            backgroundColor: "rgb(0, 0, 0, 0.4)",
            top: '85px',
            left: '20px',
            zIndex: '4',
            borderRadius: '20px',
            textDecoration: 'none', // Remove underline style from the link
            boxShadow: 'none', // No shadow by default
            transition: 'box-shadow 0.3s', // Smooth transition for the hover effect
            height: '40px'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
        >
          <Box
            display='flex'
            width='70px'
            height='70px'
            alignItems='center'
            justifyContent='center'
          >
            <Lottie animationData={animationData} />
          </Box>
          <Typography color='white' variant="h4" ml={-1} marginRight='16px'>
            @down2the_detail
          </Typography>
        </a>
        <Box zIndex='3' width="100%">
          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
              <IconButton
                onClick={onClickHandler}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  color: "white",
                  padding: "5px",
                  zIndex: "10",
                }}
              >
                <NavigateBeforeIcon sx={{ fontSize: 40 }} />
              </IconButton>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
              <IconButton
                onClick={onClickHandler}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  color: "white",
                  padding: "5px",
                  zIndex: "10",
                }}
              >
                <NavigateNextIcon sx={{ fontSize: 40 }} />
              </IconButton>
            )}
          >
            {Object.values(heroTextureImports).map((texture, index) => (
              <Box key={`carousel-image-${index}`}>
                <img
                  src={texture}
                  alt={`carousel-${index}`}
                  style={{
                    width: "100%",
                    height: "800px",
                    objectFit: "cover",
                    backgroundAttachment: "fixed",
                  }}
                />
              </Box>
            ))}
          </Carousel>
        </Box>
        <Box
          zIndex='2'
          position="absolute"
          top="23%"
          textAlign="center"
          padding="20px"
          width="400px"
          left={isNonMobile ? "10%" : "0"}
          right={isNonMobile ? undefined : "0"}
          margin={isNonMobile ? undefined : "0 auto"}
          maxWidth={isNonMobile ? undefined : "300px"}
        >
          <AppointmentForm />
        </Box>
      </Box>
    </div>
  );
};

export default MainCarousel;