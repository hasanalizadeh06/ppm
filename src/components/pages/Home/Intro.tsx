"use client";
import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import { IoArrowForward } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";

type Service = {
  id: number;
  title: string;
  description: string;
  profilePhoto?: string;
  photo?: string;
};

function Intro() {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/services`).then((res) => {
      setServices(res.data);
    });
  }, []);
  const popularServices = services
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return (
    <div className="intro-component">
      <h1 className="introHeader">
        DISCOVER YOUR INNER <span>STRENGTH</span> AND CREATE A LIFE YOU LOVE
      </h1>
      <div className="content">
        <div className="leftside">
          <div className="invisible-whiteboard"></div>
          <div className="text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet
          </div>
          <div className="list">
            <ul>
              <li>POPULAR SERVICES</li>
              {popularServices.map((service, idx) => (
                <Link href={`/services/${service.id}`}>
                  <li className={`links link${idx + 1}`} key={service.id}>
                    <span>{service.title}</span> <IoArrowForward />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="rightside">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </div>
          <div className="line3"></div>
          <div className="text2">Watch the video and learn more</div>
          <div className="button">
            <FaPlay />
          </div>
        </div>
      </div>
      <div className="invisible-list">
        <ul>
          <li>POPULAR SERVICES</li>
          {popularServices.map((service, idx) => (
            <Link href={`/services/${service.id}`}>
              <li className={`links link${idx + 1}`} key={service.id}>
                <span>{service.title}</span> <IoArrowForward />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Intro;
