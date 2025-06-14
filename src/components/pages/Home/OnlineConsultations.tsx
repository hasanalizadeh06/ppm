import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function OnlineConsultations() {
  return (
    <div className="consultation-component">
      <div className="leftside">
        <div className="linker">
          <div className="button-first">
            ONLINE CONSULTATION
          </div>
        </div>
        <div className="content">
          <h3>SIGN UP FOR AN ONLINE CONSULTATION <FaArrowRight/></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h6>COST FROM $100</h6>
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
          </p>
        </div>
      </div>
      <div className="rightside">
        <div className="box">
          <div className="img img1"/>
          <div className="text">-15% ON FIRST CONSULTATION</div>
          <div className="img img2"/>
        </div>
      </div>
    </div>
  )
}

export default OnlineConsultations