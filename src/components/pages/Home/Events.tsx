import React from "react";
import "./HomePage.scss";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import logo from "@/assets/logo2.png"
import Image from "next/image";

function Events() {
  return (
    <div className="events-component">
      <Image src={logo} alt="Bg image" width={100} height={100} className='logo'/>
      <div className="upper">
        <div className="button-first">
          UPCOMING EVENTS
        </div>
      </div>
      <div className="lower">
        <div className="leftside">
          <h1>UNLOCK YOUR POTENTIAL WITH INSPIRING EVENTS</h1>
          <div className="information">
            <h6>MORE INFORMATION</h6>
            <p><span><FiPhone/> 051 555 55 55</span><span><IoMailOutline/> loremimpus@gmail.com</span></p>
          </div>
        </div>
        <div className="rightside">
          <div className="card">
            <div className="content">
              <div className="header">
                <h2>28</h2>
                <p>FEB 2025</p>
              </div>
              <div className="texts">
                <h4>LOREM IPSUM DOLOR SIT AMET</h4>
                <p>
                  <span><IoLocationOutline/> Babek Plaza</span>
                  <span><IoMdTime/> 10:00 - 12:00</span>
                </p>
              </div>
            </div>
            <div className="linker">
              <RxArrowTopRight />
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">
                <h2>28</h2>
                <p>FEB 2025</p>
              </div>
              <div className="texts">
                <h4>LOREM IPSUM DOLOR SIT AMET</h4>
                <p>
                  <span><IoLocationOutline/> Babek Plaza</span>
                  <span><IoMdTime/> 10:00 - 12:00</span>
                </p>
              </div>
            </div>
            <div className="linker">
              <RxArrowTopRight />
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">
                <h2>28</h2>
                <p>FEB 2025</p>
              </div>
              <div className="texts">
                <h4>LOREM IPSUM DOLOR SIT AMET</h4>
                <p>
                  <span><IoLocationOutline/> Babek Plaza</span>
                  <span><IoMdTime/> 10:00 - 12:00</span>
                </p>
              </div>
            </div>
            <div className="linker">
              <RxArrowTopRight />
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">
                <h2>28</h2>
                <p>FEB 2025</p>
              </div>
              <div className="texts">
                <h4>LOREM IPSUM DOLOR SIT AMET</h4>
                <p>
                  <span><IoLocationOutline/> Babek Plaza</span>
                  <span><IoMdTime/> 10:00 - 12:00</span>
                </p>
              </div>
            </div>
            <div className="linker">
              <RxArrowTopRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
