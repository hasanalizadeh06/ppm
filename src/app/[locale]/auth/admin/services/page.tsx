"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Image from "next/image";

type Service = {
  id: number;
  title: string;
  description: string;
  profilePhoto?: string;
  photo?: string;
};

function page() {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    const accessToken = getCookie("accessToken");
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/services`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setServices(res.data);
      });
  }, []);

  return (
    <>
      <div className="header">
        <div>Services</div>
        <Link className="create-btn" href="/auth/admin/services/create">
          <MdOutlineAddAPhoto /> <span className="text">Create service</span>
        </Link>
      </div>
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Profile Photo</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.title}</td>
                <td>{s.description}</td>
                <td>
                  {s.profilePhoto ? (
                    <Image
                      width={100}
                      height={100}
                      src={s.profilePhoto}
                      alt="profile"
                      className="psychologist-img"
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  {s.photo ? (
                    <Image
                      width={100}
                      height={100}
                      src={s.photo}
                      alt="photo"
                      className="psychologist-img"
                    />
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default page;
