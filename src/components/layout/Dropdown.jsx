import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.min.css";
import "../css/Dropdown.css";

const useStyles = makeStyles((theme) => ({
  dropdown__card: {
    width: "250px !important",
    "& > img": {
      objectFit: "cover",
      height: "200px",
      width: "250px",
      [theme.breakpoints.down("md")]: {
        height: "60%",
        width: "65%",
        minWidth: "170px",
        minHeight: "130px",
      },
    },
    "& > h3": {
      marginBottom: "20px",
      fontSize: "18px",
      color: "var(--muted-1)",
    },
  },
  dropdown__cardBottom: {
    marginTop: "5px",
    display: "flex",
    width: "250px",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "65%",
      minWidth: "130px",
      minHeight: "100px",
      flexWrap: "wrap",
    },
    "& > h4": {
      fontFamily: "var(--rasa)",
      fontSize: "1.6em",
    },
    "& > span": {
      backgroundColor: "var(--color-blue)",
      color: "white",
      fontWeight: 800,
      padding: "2px 8px",
      borderRadius: "10px",
    },
  },
}));
function Dropdown({ activeButton }) {
  const config = {
    containerClass: "swiper-container hero-slider",
    parallax: true,
    centeredSlides: true,
    speed: 500,
    spaceBetween: 20,
    effect: "slide",
    slidesPerView: 5,
  };
  const classes = useStyles();

  const url = "https://rb.gy/vramji";
  return (
    <>
      <hr />
      <div className="dropdown">
        <div className="dropdown__leftBox">
          <ul>
            <li>
              <h3>{activeButton}</h3>
            </li>
            <li>All Courses</li>
            <li>Standard List</li>
            <li>Course Single</li>
            <li>User Dashboard</li>
          </ul>
        </div>
        <div className="dropdown__rightBox">
          <Swiper initialSlide="3" {...config}>
            {[...Array(40).keys()].map((item, index) => {
              return (
                <div className={classes.dropdown__card} key={index}>
                  <h3>BUSINESS</h3>
                  <img src={url} alt="" />
                  <div className={classes.dropdown__cardBottom}>
                    <h4>Basic Marketing</h4>
                    <span>$40</span>
                  </div>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
