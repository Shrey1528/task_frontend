import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import { NavbarStyled } from "./ReusableStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarStyled>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            FAKESHOP
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto active">
              <li className="nav-item ">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/cart" className="btn-1">
                <AiOutlineShoppingCart className="icon" /> (0)
              </Link>
              <Link to="/login" className="btn-2">
                <MdLogin className="icon" />
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </NavbarStyled>
  );
};

export default Navbar;
