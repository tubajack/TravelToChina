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
          <Dropdown.Item>
            <Link to="/culture">Demographics and Culture</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/economy">Economy</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/technology">Science and Technology</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/politics">Politics</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/geography">Geography</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/travel">Planning a Trip?</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Navbar;
