import React, { useState } from "react";
import { Search } from "@material-ui/icons";
import Dropdown from "./Dropdown";
import "../css/Navbar.css";

function Navbar() {
  const [activeButton, setActiveButton] = useState("Home");
  const handleDropdown = (e) => {
    if (isDropdownVisible) {
      if (e.target.innerText === activeButton)
        setDropdownVisible(!isDropdownVisible);
    } else {
      setDropdownVisible(!isDropdownVisible);
    }

    setActiveButton(`${e.target.innerText}`);
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__container">
        <h1>
          <span className="color-blue">Get2</span>
          <span className="color-yellow">Learn</span>
        </h1>
        <ul className="navbar__items">
          <li
            className={activeButton === "Home" && "active"}
            onClick={handleDropdown}
          >
            Home
          </li>
          <li
            className={activeButton === "Courses" && "active"}
            onClick={handleDropdown}
          >
            Courses
          </li>
          <li
            className={activeButton === "About Us" && "active"}
            onClick={handleDropdown}
          >
            About Us
          </li>
          <li
            className={activeButton === "Events" && "active"}
            onClick={handleDropdown}
          >
            Events
          </li>
          <li
            className={activeButton === "Contact Us" && "active"}
            onClick={handleDropdown}
          >
            Contact Us
          </li>
          <li className="search__bar">
            <input
              className="search__field"
              type="text"
              placeholder="Search here..."
            />
            <button className="search__button">
              <Search />
            </button>
          </li>
        </ul>
      </div>
      {isDropdownVisible && <Dropdown activeButton={activeButton} />}
    </div>
  );
}

export default Navbar;
