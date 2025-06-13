"use client"
import Breadcumb from "@/components/common/Breadcumb"
import Image from "next/image"
import { redirect, useParams } from "next/navigation"
import { IoArrowForward } from "react-icons/io5"
import img from "@/assets/about/1.png"
import { useEffect, useState } from "react"
import axios from "axios"

const ServiceDetailsArea = () => {
  const params = useParams()

  type Service = {
    id: number;
    title: string;
    description: string;
    profilePhoto?: string;
    photo?: string;
  };

  const [service, setService] = useState<Service | null>(null)

  useEffect(() => {
    if (!params?.id) return
    const fetchService = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${params.id}`)
        setService(res.data)
      } catch (error) {
        console.error("Failed to fetch service:", error)
        redirect("/services")
      }
    }
    fetchService()
  }, [params?.id])

  return (
    <div className="service-details">
      <Breadcumb>
        home <IoArrowForward /> services <IoArrowForward /> {service?.title}
      </Breadcumb>
      {service ? (
        <>
          <h1>{service.title}</h1>
          <Image
        src={service.photo || img}
        width={100}
        height={100}
        alt="Service Details"
        className="image"
        style={{marginBottom: "20px"}}
          />
          <div className="content">
        <p>{service.description}</p>
        <Image
          width={100}
          height={100}
          src={service.profilePhoto || img}
          alt="Service Details"
          className="image2"
        />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ServiceDetailsArea
