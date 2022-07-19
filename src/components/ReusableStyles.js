import styled from "styled-components";

export const NavbarStyled = styled.div`
  margin-top: -1rem;
  margin-bottom: -0.5rem;
  .container-fluid {
    display: flex;
    flex-direction: row;
    background-color: #c6f8ff;
    .navbar-brand {
      font-size: 3rem;
      font-weight: 500;
      color: #103783;
      letter-spacing: 2px;
      padding-left: 2rem;
      font-family: "Poppins", sans-serif;
    }
    .navbar-nav {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      font-family: "Poppins", sans-serif;
    }

    .nav-item {
      a {
        font-size: 1.4rem;
        font-weight: 500;
        color: #103783;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-family: "Poppins", sans-serif;
        &:hover {
          transform: scale(1.2);
          transition: all 0.3s ease-in-out;
        }
      }
    }
    .buttons {
      margin-right: 3rem;
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      font-family: "Poppins", sans-serif;

      .btn-1 {
        font-size: 1.5rem;
        text-decoration: none;
        border-radius: 10px;
        padding: 6px;
        color: white;
        background: linear-gradient(90deg, #103783, #9bafd9);
        border: 1px solid #183182;
        &:hover {
          background: linear-gradient(90deg, #9bafd9, #103783);
          transition: all 0.3s ease-in-out;
        }
      }
      .btn-2 {
        font-size: 1.3rem;
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        color: white;
        background: linear-gradient(90deg, #103783, #9bafd9);
        border: 1px solid #183182;
        &:hover {
          background: linear-gradient(90deg, #9bafd9, #103783);
          transition: all 0.3s ease-in-out;
        }
      }
      .icon {
        font-size: 2rem;
      }
    }
  }
`;

export const HomeStyled = styled.div`
  img {
    height: 750px;
  }
  .card-img-overlay {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .container-card {
      padding-left: 4rem;
      h5 {
        text-transform: uppercase;
        font-size: 3.5rem;
        font-weight: 700;
        font-family: "Roboto Mono", monospace;
      }
      p {
        text-transform: uppercase;
        font-size: 2.5rem;
        font-weight: 500;
        font-family: "Roboto Mono", monospace;
      }
    }
  }
`;

export const ProductsStyled = styled.div`
  overflow-x: hidden;
  .container-prod {
    text-align: center;
    margin-top: 1rem;
    padding: 2rem;
    font-family: "Poppins", sans-serif;
    h2 {
      font-size: 3rem;
      text-transform: uppercase;
    }
    hr {
      height: 5px;
    }
  }
  .card-body {
    font-family: "Poppins", sans-serif;
    h5 {
      font-size: 1.5rem;
    }
    p {
      font-weight: 500;
      font-size: 1.2rem;
    }
    a {
      margin-bottom: 0;
    }
  }
  .btn-view {
    font-family: "Poppins", sans-serif;
    background-color: black;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 1.3rem;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
      transition: 0.2s ease-in-out;
    }
  }
`;

export const ButtonStyled = styled.button`
  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  border-radius: 10px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 8px;
  background-color: #3735ca;
  color: white;
  border: none;
  &:hover {
    background-color: #4644cd;
  }
`;

export const Header4 = styled.h4`
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  text-decoration: underline;
  margin-bottom: 3rem;
  margin-top: 1rem;
  color: gray;
`;

export const Header1 = styled.h1`
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;
`;
export const Para = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

export const Header3 = styled.h3`
  margin-bottom: 1rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
`;

export const Card = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: aliceblue;
  box-shadow: 10px 10px 8px #888888;
  border-radius: 10px;
  border: 1px solid #b5c6e0;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;
export const DetailsStyled = styled.div`
  overflow-x: hidden;
`;

export const AboutStyled = styled.div`
  text-align: center;
  margin: 3rem;
  font-family: "Poppins", sans-serif;
  h1 {
    text-transform: uppercase;
  }
`;

export const ContactStyled = styled.div`
  text-align: center;
  margin: 3rem;
  font-family: "Poppins", sans-serif;
  h1 {
    text-transform: uppercase;
  }
  .con {
    margin-top: 2rem;
    text-align: center;
    p {
      font-size: 1.5rem;
    }
    span {
      margin-right: 1rem;
    }
  }
`;

export const Loader = styled.div`
  margin-left: 45%;
  margin-top: 1rem;
`;
export const LoaderProducts = styled.div`
  margin-left: 95%;
  margin-top: 1rem;
`;
