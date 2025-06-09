import Link from 'next/link'
import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

function Services() {
  return (
    <div className='services-component'>
      <div className="header">
        <h1>
          SERVICES AT OUR CENTER
        </h1>
        <Link className='button' href="/services">
          MORE <IoArrowForward />
        </Link>
      </div>
      <div className="content">
        <div className="upper">
          <div className="service-card">
            <div className='bg-color'/>
            <div className="card-upper">
              <div>
                <Link className='button' href="#">In-person consultation</Link>
              </div>
              <h2>SPEECH THERAPY</h2>
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit</p>
            </div>
            <div className="card-lower">
              <Link href="/services/speech-therapy">LEARN MORE <IoArrowForward /></Link>
            </div>
          </div>
          <div className="service-card">
            <div className='bg-color'/>
            <div className="card-upper">
              <div>
                <Link className='button' href="#">In-person consultation</Link>
              </div>
              <h2>SPEECH THERAPY</h2>
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit</p>
            </div>
            <div className="card-lower">
              <Link href="/services/speech-therapy">LEARN MORE <IoArrowForward /></Link>
            </div>
          </div>
        </div>
        <div className="lower">
          <div className="service-card">
            <div className='bg-color'/>
            <div className="card-upper">
              <div>
                <Link className='button' href="#">In-person consultation</Link>
              </div>
              <h2>SPEECH THERAPY</h2>
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit</p>
            </div>
            <div className="card-lower">
              <Link href="/services/speech-therapy">LEARN MORE <IoArrowForward /></Link>
            </div>
          </div>
          <div className="service-card">
            <div className='bg-color'/>
            <div className="card-upper">
              <div>
                <Link className='button' href="#">In-person consultation</Link>
              </div>
              <h2>SPEECH THERAPY</h2>
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit</p>
            </div>
            <div className="card-lower">
              <Link href="/services/speech-therapy">LEARN MORE <IoArrowForward /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services