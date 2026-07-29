import React from 'react'
import Typography from '@mui/material/Typography';
import "../index.css"
import { Box, Button } from '@mui/material';
function Landingpage() {
    return (
        <div>
            <div className='d-flex'>
                <div>
                    <Box sx={{ marginTop: 7 }} >
                        <Typography variant='h3' component="div" sx={{
                            fontWeight: 800,
                            marginLeft: 4
                        }} >
                            Find Clothes That Matches Your Style
                        </Typography>

                        <div class="main">
                            <div class="text">Brands</div>
                            <ul class="option">
                                <li><span>Khaddi</span></li>
                                <li><span>GulAhmed</span></li>
                                <li><span>Nishat</span></li>
                                <li><span>BeachTree</span></li>
                            </ul>
                        </div>
                        <div>
                            <Typography component="p" sx={{ marginLeft: 4,fontSize:20 }} >
                                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                            </Typography>
                        </div>
                        <Button variant='contained' sx={{ color: 'white', backgroundColor: "black", paddingLeft: 5, paddingRight: 5, paddingTop: 1, paddingBottom: 1, borderRadius: 10, marginLeft: 3, marginTop: 4 }} >Shop Now</Button>
                    </Box>
                    <div class="stats-bar">
                        <div class="stat">
                            <div class="stat-number">50+</div>
                            <div class="stat-label">International Brands</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">100+</div>
                            <div class="stat-label">High-Quality Products</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">1000+</div>
                            <div class="stat-label">Happy Customers</div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='people-img' src="../public/Rectangle_2-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Landingpage