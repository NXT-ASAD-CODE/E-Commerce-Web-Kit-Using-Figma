import React from 'react'
import Typography from '@mui/material/Typography';
import "../index.css"
import { Box } from '@mui/material';
function Landingpage() {
  return (
    <div>
        <div className='d-flex'>
            <div>
                <Box>
                <Typography variant='h3' component="div" sx={{
                    fontWeight:800,
                    marginLeft:4    
                }} >
                    Find Clothes That Matches Your Style
                </Typography>
                    
    <div class="main">
        <div class="text">Brands</div>
        <ul class="option">
            <li><span>Progammer</span></li>
            <li><span>Designer</span></li>
            <li><span>Developer</span></li>
            <li><span>Freelancer</span></li>
        </ul>
    </div>
                </Box>
            </div>
        </div>
    </div>
  )
}

export default Landingpage