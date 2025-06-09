import Link from 'next/link'
import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

import appointer from "@/assets/appointer.png"
import Image from 'next/image'

function Appointments() {
  return (
    <div className='appointments-component'>
      <Link className='button-first' href="/appointments">
        Book an Appointment
      </Link>
      <div className="header">
        <h1>
          Appointments
        </h1>
        <Link className='button' href="/appointments">
          MORE <IoArrowForward />
        </Link>
      </div>
      <div className="content">
        <div className="card">
          <Image alt="Appointer" src={appointer} className='appointer'/>
          <h2>Alice Brown</h2>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </p>
          <Link href="#">Book an Appointment</Link>
        </div>
        <div className="card">
          <Image alt="Appointer" src={appointer} className='appointer'/>
          <h2>Alice Brown</h2>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </p>
          <Link href="#">Book an Appointment</Link>
        </div>
        <div className="card">
          <Image alt="Appointer" src={appointer} className='appointer'/>
          <h2>Alice Brown</h2>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </p>
          <Link href="#">Book an Appointment</Link>
        </div>
      </div>
    </div>
  )
}

export default Appointments