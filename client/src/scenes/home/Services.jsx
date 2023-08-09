import { Box, Typography, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  goldInteriorServices,
  goldExteriorServices,
  silverInteriorServices,
  silverExteriorServices,
  bronzeInteriorServices,
  bronzeExteriorServices,
} from './allServices';


const Services = () => {
  const [selectedButton, setSelectedButton] = useState("Gold");
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleClick = (label) => {
    setSelectedButton(label);
  };

  const buttons = ['Gold', 'Silver', 'Bronze'];
  const normalSize = '16px';
  const selectedSize = '20px';

  const interiorServices = [
    'Interior Vacuum',
    'Seats Vacuumed/Shampooed/ Cleaned/Disinfected',
    'Carpets Cleaned/Spot Treatment',
    'Full Interior Dust/Wipe Down/Disinfect',
    'In-Depth Detail of the Center Console',
    'Windows Cleaning',
    'Door Panels/Jams Cleaning',
    'Floor Mats Extracted Cleaned/Shampooed',
    'AC Vents Cleaning',
    'Dashboard Cleaning',
    'All Stains Removed to the Best of Their Ability',
    'Steam Cleaning',
  ];

  const exteriorServices = [
    'Foam Cannon Hand Wash/Dry',
    'Tires and Rims Cleaned/Polished',
    'Windows Cleaned',
    'Bug Removal',
    'Spray Wax/Hand Polish for Glossy Finish + Protect the Paint',
    'Tire Shine Applied',
    'Clay Bar Treatment',
  ];

  const getInteriorServices = () => {
    switch (selectedButton) {
      case "Gold":
        return goldInteriorServices;
      case "Silver":
        return silverInteriorServices;
      case "Bronze":
        return bronzeInteriorServices;
      default:
        return [];
    }
  };
  const getExteriorServices = () => {
    switch (selectedButton) {
      case "Gold":
        return goldExteriorServices;
      case "Silver":
        return silverExteriorServices;
      case "Bronze":
        return bronzeExteriorServices;
      default:
        return [];
    }
  };

  console.log("selectedButton:", selectedButton);
  console.log("getInteriorServices():", getInteriorServices());

  return (
    <div id='services'>
      <Box width='100%' margin='20px auto'>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Typography variant="h2" textAlign='center'>Service Packages</Typography>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <ButtonGroup variant="text" aria-label="text button group">
            {buttons.map((label, index) => (
              <Button
                key={index}
                onClick={() => handleClick(label)} // Pass the button label here
                style={{
                  fontWeight: selectedButton === label ? "bold" : "normal",
                  fontSize: selectedButton === label ? selectedSize : normalSize,
                }}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        <Box
          border='2px solid black'
          borderRadius='8px'
          margin='20px 30px'
          display='flex'
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display='flex'
            flexDirection='column'
            width={breakPoint ? '50%' : '80%'}
            paddingLeft='5%'
            margin='15px auto'
          >
            <Box width='50%' borderBottom='2px solid grey' marginBottom='10px'>
              <Typography variant="h4">Interior</Typography>
            </Box>
            {/* Interior services checkboxes */}
            {interiorServices.map((service, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center", margin: "5px 0" }}
              >
                <input
                  type="checkbox"
                  id={`service_${index}`}
                  checked={selectedButton !== null && getInteriorServices().includes(service)}
                  readOnly
                />
                <label htmlFor={`service_${index}`}>{service}</label>
              </div>
            ))}
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            width={breakPoint ? '50%' : '80%'}
            paddingLeft='5%'
            margin='15px auto'
          >
            <Box width='50%' borderBottom='2px solid grey' marginBottom='10px'>
              <Typography variant="h4">Exterior</Typography>
            </Box>
            {exteriorServices.map((service, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center", margin: "5px 0" }}
              >
                <input
                  type="checkbox"
                  id={`service_${index}`}
                  checked={selectedButton !== null && getExteriorServices().includes(service)}
                />
                <label htmlFor={`service_${index}`}>{service}</label>
              </div>
            ))}
          </Box>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          margin='20px auto'
        >
          <a href="https://calendly.com/down2the_detail/estimate?month=2023-07" target="_blank" rel="noopener noreferrer">
            <Button variant="contained" >SCHEDULE AN APPOINMENT</Button>
          </a>
        </Box>
      </Box>
    </div>
  );
}

export default Services;