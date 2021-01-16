import React from 'react'
import {
  Typography,
} from "@material-ui/core";

const Logo = () => {
    return (
      <div className="logoContainer">
        <img src="/images/Untitled-–-Figma.png" alt="logo" />
        <Typography variant="h6" component="h1" className="logo">
          Soprano
        </Typography>
      </div>
    );
}

export default Logo
