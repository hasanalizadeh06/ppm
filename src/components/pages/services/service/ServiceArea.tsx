"use client";
import Breadcumb from "@/components/common/Breadcumb";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

import img1 from "@/assets/about/1.png";
import axios from "axios";
import { useEffect, useState } from "react";

type Service = {
  id: number;
  title: string;
  description: string;
  profilePhoto?: string;
  photo?: string;
};

const ServiceArea = () => {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/services`).then((res) => {
      setServices(res.data);
    });
  }, []);
  // const t = useTranslations("Services")
  return (
    <section className="services-page">
      <Breadcumb>
        home <IoArrowForward /> services
      </Breadcumb>
      <div className="services">
        {services.map((service, idx) => {
          const isReverse = idx % 2 === 0;
          return (
            <div className="service" key={service.id}>
              <div className="header">
                <div className="name">{service.title}</div>
                <Link href={`/services/${service.id}`}>
                  <div className="info">
                    MORE <IoArrowForward />
                  </div>
                </Link>
              </div>
              <div className={`content${isReverse ? " content-reverse" : ""}`}>
                {isReverse ? (
                  <>
                    <div className="text">{service.description}</div>
                    <div className="image">
                      <Image
                        width={100}
                        height={100}
                        src={service.photo || img1}
                        alt=""
                      />
                      <div className="img-text">In-person consultation</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="image-right">
                      <Image
                        width={100}
                        height={100}
                        className="flipped"
                        src={service.photo || img1}
                        alt=""
                      />
                      <div className="img-text-right">
                        In-person consultation
                      </div>
                    </div>
                    <div className="text">{service.description}</div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceArea;
