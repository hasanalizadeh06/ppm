import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { RxArrowTopRight } from "react-icons/rx";

function Therapists() {
  return (
    <div className="therapists-component">
      <div className="upper">
        <Link className="button-first" href="/appointments">
          LATEST BLOGS
        </Link>
        <Link className="button" href="/blog">
          MORE <IoArrowForward />
        </Link>
      </div>
      <div className="header-for-mobile">
        <h1>OUR TERAPISTS’ THOUGHTS</h1>
      </div>
      <div className="lower">
        <div className="left-side">
          <div className="textbox">
            <span>LOREM IPSUM DOLOR SIT <br/>AMET LOREM IPSUM <br/>DOLOR SIT</span>
            <RxArrowTopRight className='linker'/>
          </div>
        </div>
        <div className="middle">
          <div className="header">
            <h1>OUR TERAPISTS’ THOUGHTS</h1>
          </div>
          <div className="content">
            <div className="card">
              <div className="textbox">
                <span>LOREM IPSUM DOLOR SIT <br/>AMET LOREM IPSUM <br/>DOLOR SIT</span>
                <RxArrowTopRight className='linker'/>
              </div>
            </div>
            <div className="card">
              <div className="textbox">
                <span>LOREM IPSUM DOLOR SIT <br/>AMET LOREM IPSUM <br/>DOLOR SIT</span>
                <RxArrowTopRight className='linker'/>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="textbox">
            <span>LOREM IPSUM DOLOR SIT <br/>AMET LOREM IPSUM <br/>DOLOR SIT</span>
            <RxArrowTopRight className='linker'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Therapists;
