"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";

type Service = {
  id: number;
  title: string;
  description: string;
  profilePhoto?: string;
  photo?: string;
};

function Services() {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/services`).then((res) => {
      setServices(res.data);
    });
  }, []);
  return (
    <div className="services-component">
      <div className="header">
        <h1>SERVICES AT OUR CENTER</h1>
        <Link className="button" href="/services">
          MORE <IoArrowForward />
        </Link>
      </div>
      <div className="content">
        <div className="upper">
          {services.slice(0, 2).map((service) => (
            <div
              className="service-card"
              key={service.id}
              style={{
                backgroundImage: service.photo
                  ? `url(${service.photo})`
                  : undefined,
              }}
            >
              <div className="bg-color" />
              <div className="card-upper">
                <div>
                  <div className="button">In-person consultation</div>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <div className="card-lower">
                <Link href={`/services/${service.id}`}>
                  LEARN MORE <IoArrowForward />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="lower">
          {services.slice(2, 4).map((service) => (
            <div
              className="service-card"
              key={service.id}
              style={{
                backgroundImage: service.photo
                  ? `url(${service.photo})`
                  : undefined,
              }}
            >
              <div className="bg-color" />
              <div className="card-upper">
                <div>
                  <div className="button">In-person consultation</div>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <div className="card-lower">
                <Link href={`/services/${service.id}`}>
                  LEARN MORE <IoArrowForward />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
