import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";

const AppointmentForm = () => {
  const [email, setEmail] = useState("");

  return (
    <Box margin="80px auto" textAlign="center" bgcolor="rgb(0, 0, 0, 0.4)" borderRadius='8px'>
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" style={{ color: 'white' }} />
      </IconButton>
      <Typography variant="h5" style={{ color: 'white' }} >Subscribe To Our Newsletter</Typography>
      <Typography variant="h6" style={{ color: 'white' }} >
        and receive $20 coupon for your first order when you checkout
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        backgroundColor="#F2F2F2"
        borderRadius='8px'
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
}

export default AppointmentForm;