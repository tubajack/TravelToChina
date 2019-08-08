import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/history">History of China</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/chinese-culture">
            Demographics and Culture
          </Dropdown.Item>
          <Dropdown.Item href="#/economy-of-china">
            Economy
          </Dropdown.Item>
          <Dropdown.Item href="#/technological-aspects-china">
            Science and Technology
          </Dropdown.Item>
          <Dropdown.Item href="#/politics-and-government">
            Politics
          </Dropdown.Item>
          <Dropdown.Item href="#/geography-of-china">
            Geography
          </Dropdown.Item>
          <Dropdown.Item href="#/travel-to-china">
            Planning a trip?
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Navbar;
