import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./AboutCenter.css";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "80%",
      margin: "0 50px",
      "& > h2": {
        margin:0
      },
      "& > p": {
        
      },
      "& > button": {
      },
    },
  },
}));

function AboutCenter() {
  const classes = useStyles();

  return (
    <div className="about__center">
      <Box className={`${classes.box} about-box`}>
        <div className="about__leftBox">
          <h2>About Our Center</h2>
          <p style = {{textAlign:"justify",lineHeight:"1.5"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sint
            quidem explicabo itaque eaque facilis natus odio minima, animi
            inventore quasi, cupiditate harum. Itaque, aliquid. Alias,
            architecto? Dolore, dolorem nihil.orem ipsum dolor sit amet consectetur adipisicing elit. Rem sint
            quidem explicabo itaque eaque facilis natus odio minima, animi
            inventore quasi, cupiditate harum. Itaque, aliquid. Alias,
            architecto? Dolore, dolorem nihil.
          </p>
          <button>Learn more</button>
        </div>
        <div className="about__rightBox">
        <iframe className = "youtube-embed" src="https://www.youtube.com/embed/sBws8MSXN7A" width = "100%" title ="React"></iframe>
        </div>
      </Box>
    </div>
  );
}

export default AboutCenter;
