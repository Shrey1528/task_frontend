import React from "react";
import bg from "../assets/bg.jpeg";
import Products from "./Products";
import { HomeStyled } from "./ReusableStyles";

const Home = () => {
  return (
    <>
      <HomeStyled className="hero">
        <div className="card bg-dark text-white border-0">
          <img src={bg} class="card-img" alt="background" />
          <div className="card-img-overlay">
            <div className="container-card">
              <h5 className="card-title">The new season arrivals are here.</h5>
              <p className="card-text">Check out now</p>
            </div>
          </div>
        </div>
      </HomeStyled>
      <Products />
    </>
  );
};

export default Home;
