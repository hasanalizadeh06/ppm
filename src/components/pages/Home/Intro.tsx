import React from 'react'
import './HomePage.scss'
import { IoArrowForward } from 'react-icons/io5'
import { FaPlay } from "react-icons/fa";

function Intro() {
  return (
    <div className="intro-component">
      <h1 className='introHeader'>
        DISCOVER YOUR INNER <span>STRENGTH</span> AND CREATE A LIFE YOU LOVE
      </h1>
      <div className="content">
        <div className="leftside">
          <div className="invisible-whiteboard"></div>
          <div className="text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
          </div>
          <div className="list">
            <ul>
              <li>POPULAR SERVICES</li>
              <li className='links link1'>
                <span>Lorem Impus</span> <IoArrowForward />
              </li>
              <li className='links link2'>
                <span>Lorem Impus</span> <IoArrowForward />
              </li>
            </ul>
          </div>
        </div>
        <div className="rightside">
          <div className="line1">
          </div>
          <div className="line2">
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
          </div>
          <div className="line3">
          </div>
          <div className="text2">
            Watch the video and learn more
          </div>
          <div className="button">
            <FaPlay/>
          </div>
        </div>
      </div>
      <div className="invisible-list">
        <ul>
          <li>POPULAR SERVICES</li>
          <li className='links link1'>
            <span>Lorem Impus</span> <IoArrowForward />
          </li>
          <li className='links link2'>
            <span>Lorem Impus</span> <IoArrowForward />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Intro