"use client";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";

type Psychologist = {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  coverImage?: string;
  image?: string;
};

function page() {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  useEffect(() => {
    const accessToken = getCookie("accessToken");

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/psychologists`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setPsychologists(res.data);
      });
  }, []);

  return (
    <>
      <div className="header">
        <div>Psychologist</div>
        <Link href="/auth/admin/psychologist/add" className="create-btn">
          <MdOutlineAddAPhoto /> <span className="text">Add psychologist</span>
        </Link>
      </div>
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Cover Image</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {psychologists.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.fullName}</td>
                <td>{p.email}</td>
                <td>{p.phoneNumber}</td>
                <td>
                  {p.coverImage ? (
                    <Image
                      width={100}
                      height={100}
                      src={p.coverImage}
                      alt="cover"
                      className="psychologist-img"
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  {p.image ? (
                    <Image
                      width={100}
                      height={100}
                      src={p.image}
                      alt="profile"
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
