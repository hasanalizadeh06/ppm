import Link from 'next/link'
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

function Preferences() {
  return (
    <div className='preferences-component'>
      <div className="button-first">
        OUR PREFERENCES
      </div>
      <h1>LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET </h1>
      <div className="img"/>
      <div className="list">
        <div className="item">
          <div className="header">
            <FaCircleCheck className='icon'/> LOREM IPSUM DOLOR SIT AMET
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="item">
          <div className="header">
            <FaCircleCheck className='icon'/> LOREM IPSUM DOLOR SIT AMET
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="item">
          <div className="header">
            <FaCircleCheck className='icon'/> LOREM IPSUM DOLOR SIT AMET
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="item">
          <div className="header">
            <FaCircleCheck className='icon'/> LOREM IPSUM DOLOR SIT AMET
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preferences