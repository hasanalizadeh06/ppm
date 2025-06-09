import Image from 'next/image'
import React from 'react'

import logo from "@/assets/logo2.png"
import arrow from "@/assets/image.png"
import Link from 'next/link'

function PsychologyCenter() {
  return (
    <div className='psychology-center-component'>
      <Image src={logo} alt="Bg image" className='logo'/>
      <div className="main">
        <div className="header">
          <h1>
            Progressive Psychology Center
          </h1>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
          </p>
        </div>
        <div className="learn-more">
            <Image src={arrow} alt="arrow" className='arrow'/>
            <Link className='button' href="#">Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default PsychologyCenter