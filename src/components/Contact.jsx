import React from "react";
import { ContactStyled } from "./ReusableStyles";
import { GrMapLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <ContactStyled>
      <h1>Contact Us</h1>
      <div className="con">
        <p>
          <span>
            <GrMapLocation />
          </span>{" "}
          XYZ Road, India
        </p>
        <p>
          <span>
            <HiOutlineMail />
          </span>{" "}
          xyz@gmail.com
        </p>
        <p>
          <span>
            <BsFillTelephoneFill />
          </span>{" "}
          +91 12345-67890
        </p>
      </div>
    </ContactStyled>
  );
};

export default Contact;
