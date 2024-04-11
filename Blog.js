import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import toji from "./toji.jpg";
import yuta from "./Yutaa.png";
import pic from "./pix.jpg";
import { Grid } from "@mui/material";
const Blog = ({ imageURL }) => {
  return (
    <div className="bigContainer">
      <Card className="pinContainer">
        <CardMedia
          component="img"
          className="img"
          image={imageURL}
          alt="No img Found"
        />
        
      </Card>
    </div>
  );
};

export default Blog;
