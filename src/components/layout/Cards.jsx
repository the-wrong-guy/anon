import React from "react";
import {
  Star,
  BookmarkBorder,
  EmojiFlags,
  AccessAlarm,
} from "@material-ui/icons";
import {
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Cards.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 320,
    width: "20vw",
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      width: "70vw",
    },
    "&:hover": {
      boxShadow: theme.shadows[5],
    },
  },
  media: {
    height: 250,
    [theme.breakpoints.down("md")]: {
      height: "50vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "40vw",
    },
  },
  title: {
    fontSize: "1.5em",
    fontFamily: "Roboto Slab",
    color: "var(--color-yellow)",
  },
  cards: {
    [theme.breakpoints.down("md")]: {},
  },
}));
function Cards() {
  const classes = useStyles();
  const url = "https://rb.gy/c1xnww";
  const cards = [
    { name: "Art Programs", programBy: "Charles Banks", time: "June 3, 2019" },
    {
      name: "Science Programs",
      programBy: "Charles Booth",
      time: "June 3, 2019",
    },
    { name: "Sports Programs", programBy: "James Banks", time: "June 3, 2019" },
  ];
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      className={classes.cards}
      p={1}
      m={1}
      css={{ maxWidth: "100%" }}
      justifyContent="center"
      autoPlay
    >
      {cards.map((item, index) => {
        return (
          <Card className={`${classes.root} card`} key={index}>
            <CardMedia
              className={`${classes.media} card__media`}
              image={url}
              title="IMAGE"
            />
            <CardContent>
              <div className="card__bottomTop">
                <span>{item.time}</span>
                <IconButton>
                  <BookmarkBorder />
                </IconButton>
              </div>
              <Typography
                className={classes.title}
                gutterBottom
                variant="h4"
                component="h3"
              >
                {item.name}
              </Typography>
              <Typography variant="p" color="textSecondary" component="p">
                {item.programBy}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <AccessAlarm />
              </IconButton>
              <IconButton>
                <EmojiFlags />
              </IconButton>
              <IconButton>
                <Star />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}

export default Cards;

// {cards.map((item, index) => {
//   return (
//     <div className="card" key={index}>
//       <div className="card__top">
//         <img src={url} alt={index} />
//       </div>
//       <div className="card__bottom">
//         <div className="card__bottomTop">
//           <span>{item.time}</span>
//           <IconButton>
//             <BookmarkBorder />
//           </IconButton>
//         </div>
//         <h3 className="card__title">{item.name}</h3>
//         <p className="card__programBy">{item.programBy}</p>
//         <div className="card__icons">
//           <IconButton>
//             <AccessAlarm />
//           </IconButton>
//           <IconButton>
//             <EmojiFlags />
//           </IconButton>
//           <IconButton>
//             <Star />
//           </IconButton>
//         </div>
//       </div>
//     </div>
//   );
// })}
