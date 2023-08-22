import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h2">Welcome To My Resturant</Typography>
<p>
       <h4>About Us:</h4> 
Vishwajeet's Restaurant, we're not just a restaurant - we're a celebration of flavors, a blend of tradition and innovation, and a gathering place for food enthusiasts. From the moment you step through our doors, you'll embark on a culinary journey that engages all your senses.

<h4>Our Mission:</h4>
We're on a mission to create unforgettable dining experiences that nourish both body and soul. With a commitment to using locally sourced, organic ingredients, we strive to bring you the freshest and most vibrant flavors in every bite.

<h4>Our Culinary Philosophy:</h4>
Every dish here is a masterpiece, crafted with passion and precision. Our menu is a fusion of global inspirations, where traditional recipes meet contemporary techniques. From the sizzling grills to the delicate pastries, each creation is a reflection of our dedication to culinary excellence.

</p>
      </Box>
    </Layout>
  );
};

export default About;
