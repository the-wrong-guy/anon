import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  teamCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "var(--raleway)",
    marginTop: theme.spacing(8),
    "& > p": {
      fontSize: 15,
      marginTop: theme.spacing(2),
    },
    "& > h3": {
      fontSize: 24,
      fontWeight: 900,
      fontStyle: "italic",
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
    },
    "& > h4": {
      fontSize: 15,
      color: "var(--color-blue)",
    },
  },
  avatar: {
    width: theme.spacing(24),
    height: theme.spacing(24),

    [theme.breakpoints.down("md")]: {
      width: "12vw",
      height: "12vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "15vw",
      height: "15vw",
    },
    [theme.breakpoints.down(800)]: {
      width: "20vw",
      height: "20vw",
    },
  },
}));

const url =
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
function TeamCard() {
  const classes = useStyles();

  return (
    <div className={classes.teamCard}>
      <Avatar alt="Remy Sharp" src={url} className={classes.avatar} />
      <p>Partner & CEO</p>
      <h3>John Doe</h3>
      <h4>john@get2learn.ai</h4>
    </div>
  );
}

export default TeamCard;
