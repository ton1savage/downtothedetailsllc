import { Box, Button, Typography, FormControl, InputLabel, Select, MenuItem, FormHelperText, Divider } from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Lottie from "lottie-react";
import animationData from './animation_lksxakfb.json';
import { Link as ScrollLink } from "react-scroll";

const Quote = () => {
  const [quoteDisplay, setQuoteDisplay] = useState(false);
  const [service, setService] = useState('Gold');
  const [carType, setCarType] = useState('car');
  const [packageType, setPackageType] = useState('full');
  const [quote, setQuote] = useState('$0');
  const breakPoint = useMediaQuery('(min-width:1000px)');

  const handleChange = (event) => {
    setService(event.target.value);
  };
  const handleChangeCar = (event) => {
    setCarType(event.target.value);
  };
  const handleChangeType = (event) => {
    setPackageType(event.target.value);
  };
  const handleClick = () => {
    setQuoteDisplay(prevQuoteDisplay => !prevQuoteDisplay);
  }
  const generateQuote = () => {
    if (service === "Gold" && carType === "car" && packageType === "full") {
      setQuote("$205");
    } else if (service === "Silver" && carType === "car" && packageType === "full") {
      setQuote("$190");
    } else if (service === "Bronze" && carType === "car" && packageType === "full") {
      setQuote("$175");
    } else if (service === "Gold" && carType === "suv" && packageType === "full") {
      setQuote("$220");
    } else if (service === "Silver" && carType === "suv" && packageType === "full") {
      setQuote("$205");
    } else if (service === "Bronze" && carType === "suv" && packageType === "full") {
      setQuote("$190");
    } else if (service === "Gold" && carType === "truck" && packageType === "full") {
      setQuote("$235");
    } else if (service === "Silver" && carType === "truck" && packageType === "full") {
      setQuote("$220");
    } else if (service === "Bronze" && carType === "truck" && packageType === "full") {
      setQuote("$205");
    } else if (service === "Gold" && carType === "car" && packageType === "interior" || packageType === "exterior") {
      setQuote("$149.99");
    } else if (service === "Silver" && carType === "car" && packageType === "interior" || packageType === "exterior") {
      setQuote("$139.99");
    } else if (service === "Bronze" && carType === "car" && packageType === "interior" || packageType === "exterior") {
      setQuote("$129.99");
    } else if (service === "Gold" && carType === "suv" && packageType === "interior" || packageType === "exterior") {
      setQuote("$159.99");
    } else if (service === "Silver" && carType === "suv" && packageType === "interior" || packageType === "exterior") {
      setQuote("$149.99");
    } else if (service === "Bronze" && carType === "suv" && packageType === "interior" || packageType === "exterior") {
      setQuote("$139.99");
    } else if (service === "Gold" && carType === "truck" && packageType === "interior" || packageType === "exterior") {
      setQuote("169.99");
    } else if (service === "Silver" && carType === "truck" && packageType === "interior" || packageType === "exterior") {
      setQuote("$159.99");
    } else if (service === "Bronze" && carType === "truck" && packageType === "interior" || packageType === "exterior") {
      setQuote("$149.99");
    } else {
      setQuote("Please select valid options to get a quote.");
    }
  };

  return (
    <div id="quote">
      <ScrollLink to="quote" smooth={true} duration={500} className="nav-link" offset={-150}>
        <Button
          variant="contained"
          fullWidth
          style={{
            backgroundColor: '#0CAFFF'
          }}
          onClick={handleClick}
        >
          <Typography display='flex' alignItems='center'>
            {quoteDisplay ? (
              <KeyboardDoubleArrowDownIcon style={{ marginRight: '8px', color: 'black' }} />
            ) : (
              <KeyboardDoubleArrowRightIcon style={{ marginRight: '8px', color: 'white' }} />
            )}
            {quoteDisplay ? "HIDE QUOTE" : "GET QUOTE"}
          </Typography>
        </Button>
      </ScrollLink>
      {quoteDisplay && (
        <Box
          display='flex'
          height={breakPoint ? '400px' : '100%'}
          borderRadius='2px solid black'
          transition="height 2s" // Set the duration of the transition
          overflow="hidden"
        >
          <Box
            display='flex'
            flexDirection={breakPoint ? 'row' : 'column'}
            width={breakPoint ? '70%' : '90%'}
            alignItems='center'
            justifyContent='space-between'
            margin='50px auto'
          >
            <Box display='flex' flexDirection='column' gap='10px'>
              <FormControl sx={{ minWidth: 270 }}>
                <InputLabel id="demo-simple-select-helper-label">Service</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={service}
                  label="Service"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Gold"}>Gold</MenuItem>
                  <MenuItem value={"Silver"}>Silver</MenuItem>
                  <MenuItem value={"Bronze"}>Bronze</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: 270 }}>
                <InputLabel id="demo-simple-select-helper-label">Car Type</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={carType}
                  label="Car Type"
                  onChange={handleChangeCar}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"car"}>car/compact</MenuItem>
                  <MenuItem value={"suv"}>suv/mid-size</MenuItem>
                  <MenuItem value={"truck"}>van/truck</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: 270 }}>
                <InputLabel id="demo-simple-select-helper-label">Interior/Exterior</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={packageType}
                  label="Car Type"
                  onChange={handleChangeType}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"full"}>full package</MenuItem>
                  <MenuItem value={"interior"}>interior only</MenuItem>
                  <MenuItem value={"exterior"}>exterior only</MenuItem>
                </Select>
              </FormControl>

              <Button
                variant="filled"
                style={{
                  backgroundColor: '#0CAFFF',
                }}
                onClick={generateQuote}
              >
                <Typography color='white'>
                  GET Quote
                </Typography>
              </Button>
            </Box>

            <Box
              style={{
                borderLeft: breakPoint ? '2px solid black' : 'none',
                borderBottom: breakPoint ? 'none' : '2px solid black',
                height: breakPoint ? '350px' : 'auto',
                margin: breakPoint ? '0 16px' : '8px 0',
              }}
            />
            <Box
              display='flex'
              backgroundColor='#F2F2F2'
              borderRadius='8px'
              alignItems='center'
            >
              <Box
                minHeight='150px'
                minWidth='200px'
                bgcolor='#c2c2c2'
                display='flex'
                borderRadius='8px'
                flexDirection='column'
                marginTop='20px'
                marginBottom='20px'
                marginLeft='20px'
              >
                <Box
                  width='95%'
                  borderBottom='2px solid #F2F2F2'
                  margin='auto'
                  flexDirection='row'
                >
                  <Typography variant='h4' margin='3px auto'>
                    Quote:
                  </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                  <Typography display='flex' alignItems='center' margin='auto' variant='h7' >
                    {quote}
                  </Typography>
                </Box>
              </Box>
              <Box
                margin='auto 10px'
                display='flex'
                flexDirection='column'
                alignItems='center'
              >
                {(quote === "$205" || quote === "$129.99") && (
                  <>
                    <Box display='flex' width='50px' height='50px' alignItems='center' justifyContent='center'>
                      <Lottie animationData={animationData} />
                    </Box>
                    <Typography>Best Seller</Typography>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      )}

    </div>
  );

};
export default Quote;