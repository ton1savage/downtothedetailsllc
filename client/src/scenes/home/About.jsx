import { Typography, Box } from "@mui/material";
import { shades } from "../../theme";

const About = () => {
  return (
    <div id='about'>
      <Box
        display='flex'
        width='100%'
        bgcolor={shades.black[500]}
      >
        <Box width='60%' margin='90px auto'>
          <Typography variant="h1" color={shades.white[500]}>More About Us</Typography>
          <Typography variant="h2" marginTop="20px" color={shades.white[500]}>
            Our Story
          </Typography>
          <Typography variant="h4" marginTop="20px" color={shades.white[500]}>
            Down to the Details L.L.C. was a business idea that came into fruition after graduating college, by understanding
            a crucial aspect of human nature: we are all judged by others depending on our appearance, the vehicles we drive,
            and the lifestyles we live etc. Although we all want to come across as clean, organized, and well presentable, sometimes
            life gets too busy. This is where Down to the Details has found its vision and purpose. Our team understands your vehicle is
            more than just a car. Our team understands we are working on an aspect that makes up your image as a whole. Our team will listen
            to your input/concerns and ensure our results reflect those expectations.
          </Typography>
          <Typography variant="h4" marginTop="20px" color={shades.white[500]}>
            Down to the Details was created to take some of that responsibility off your shoulders, bare it as our own, then allow
            you to feel all the positive effects that follow. A clean vehicle, a clean image, and a clean lifestyle.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default About;