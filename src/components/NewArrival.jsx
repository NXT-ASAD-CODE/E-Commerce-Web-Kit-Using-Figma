import React from 'react';
import "../index.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

function NewArrival() {

  const phoneNumber = "923146581721"; // Our WhatsApp number

  const handleBuyNow = () => {

    const product = {
      name: "Digital Printed Lawn Summer 2026",
      price: "2000",
    };

    const message = `Hello!

I want to order this product.

🛍️ Product: ${product.name}
💰 Price: Rs. ${product.price}

Please let me know the availability.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="height-100-vh">

      <div className="d-flex justify-content-center">
        <h1 className="margin-top-50 font-size-55 font-family">
          New Arrivals
        </h1>
      </div>

      <div className="d-flex justify-content-space-around margin-top-75">

        <Card sx={{ maxWidth: 345 }}>

          <CardActionArea>

            <CardMedia
              component="img"
              height="380"
              image="../whatsapp iamges/WhatsApp Image 2026-06-09 at 3.06.23 PM.jpeg"
              alt="Khadi Image"
            //   width="200"
              
            />

            <CardContent>

              <Typography gutterBottom variant="h6">
                Digital Printed <br />
                Lawn Summer 2026
              </Typography>

              <Typography sx={{ fontSize: 16 }}>
                Rs. 2000
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Premium quality digital printed lawn suit with soft fabric,
                perfect for the summer season.
              </Typography>

            </CardContent>

          </CardActionArea>

          <CardActions>

            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>

          </CardActions>

        </Card>

      </div>

    </div>
  );
}

export default NewArrival;