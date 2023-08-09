import { Box, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const breakPoint = useMediaQuery("(min-width:600px)");

  return (
    <div id='footer'>
      <Box
        bgcolor="#242424"
        color="#fff"
        padding="40px 0"
        textAlign="center"
        display='flex'
      >
        <Box
          width={breakPoint ? "80%" : "100%"}
          display='flex'
          justifyContent='space-between'
          margin='auto'
        >
          <Typography variant="h2">
            Down To The Details L.L.C.
          </Typography>
          <Box display='grid' gap='10px' textAlign='left'>
            <Typography variant="body1">
              Contact Us
            </Typography>
            <Typography style={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon style={{ marginRight: '5px' }} />
              (520) 251-4949
            </Typography>
            <Typography style={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon style={{ marginRight: '5px' }} />
              youremail@email.com
            </Typography>
          </Box>
          <Box display='grid' gap='5px' textAlign='left'>
            <Typography variant="body1">
              Location
            </Typography>
            <Typography style={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon style={{ marginRight: '5px' }} />
              1803 E Rio Salado Pkwy # 105, Tempe, AZ 85281
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;