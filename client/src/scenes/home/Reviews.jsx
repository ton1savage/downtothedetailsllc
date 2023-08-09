import React, { useEffect, useState, useRef } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { Box, Button, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import useMediaQuery from "@mui/material/useMediaQuery";
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

const Reviews = ({ apiKey }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewDisplay, setReviewDisplay] = useState(false);
  const breakPoint = useMediaQuery("(min-width:600px)");
  const scrollContainerRef = useRef();
  const [showGradient, setShowGradient] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, [apiKey]);

  const fetchReviews = async () => {
    console.log('Calling fetchReviews...');
    try {
      const response = await fetch('http://localhost:5001/api/reviews?apiKey=' + apiKey);
      const data = await response.json();

      console.log('Response from server:', data);

      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleClick = () => {
    setReviewDisplay(prevReviewDisplay => !prevReviewDisplay);
  }

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const isAtBottom = scrollContainer.scrollHeight - scrollContainer.scrollTop === scrollContainer.clientHeight;
      setShowGradient(!isAtBottom);
    }
  };

  useEffect(() => {
    // Ensure the gradient is initially shown when the component mounts
    setShowGradient(true);
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div id="reviews">
      <ScrollLink to="reviews" smooth={true} duration={500} className="nav-link" offset={-100}>
        <Button
          variant="contained"
          fullWidth
          style={{
            backgroundColor: '#0CAFFF'
          }}
          onClick={handleClick}
        >
          <Typography display='flex' alignItems='center'>
            {reviewDisplay ? (
              <KeyboardDoubleArrowDownIcon style={{ marginRight: '8px', color: 'black' }} />
            ) : (
              <KeyboardDoubleArrowRightIcon style={{ marginRight: '8px', color: 'white' }} />
            )}
            {reviewDisplay ? "HIDE REVIEWS" : "SHOW REVIEWS"}
          </Typography>
        </Button>
      </ScrollLink>
      {reviewDisplay && (
        <Box width='100%' position='relative'>

          <Box
            margin={!breakPoint ? '10px 20px' : '10px 100px'}
            marginTop='30px'
            position='relative'
            borderRadius='8px'
          >
            <div
              ref={scrollContainerRef}
              style={{
                maxHeight: '500px',
                overflowY: 'auto',
                margin: '10px 10px',
              }}
              onScroll={handleScroll}
            >
              {reviews.map((review, index) => (
                <Box key={review.time} borderBottom="2px solid black" marginBottom="30px">
                  <Box display='flex' justifyContent='space-between'>
                    <Box display='flex' alignItems='center'>
                      <Avatar style={{ backgroundColor: getRandomColor() }}>{review.author_name.charAt(0)}</Avatar>
                      <Typography ml={+1}>
                        {review.author_name}
                      </Typography>
                    </Box>
                    <Rating name="read-only" value={review.rating} readOnly />
                  </Box>
                  <Box width='80%'>
                    <p>{review.text}</p>
                  </Box>
                </Box>
              ))}

              {/* The scrollable content */}
            </div>

            {/* Add the gray gradient overlay at the bottom when reviewDisplay is true and not at the bottom */}
          </Box>
          {reviewDisplay && showGradient && (
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '70px',
                width: '100%',
                background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.5))',
              }}
            />
          )}
        </Box>
      )};
    </div>
  );
};

export default Reviews;



//https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBg8kkM413J-HbQpUUm0PM0FQ1hHk1jJNw&place_id=ChIJN2hmQkVnbKYRs5gVMNjySYo