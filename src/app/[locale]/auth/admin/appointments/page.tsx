"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

type Psychologist = {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  coverImage?: string;
  image?: string;
};

type Availability = {
  id: number;
  appointmentDate: string;
  startTime: string;
  endTime: string;
  psychologistId: number;
  isAvailable: boolean;
};

type Appointment = {
  id: number;
  name: string;
  phone: string;
  email: string;
  reason: string;
  appointmentDate: string;
  startTime: string;
  endTime: string;
  psychologistId: number;
  psychologist: Psychologist;
  availability: Availability;
};

function page() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments`)
      .then((res) => setAppointments(res.data));
  }, []);
  return (
    <>
      <div className="header">
        <div>Appointments</div>
        <Link href="/auth/admin/appointments/create" className="create-btn">
          <MdOutlineAddAPhoto />{" "}
          <span className="text">Create appointment</span>
        </Link>
      </div>
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Reason</th>
              <th>Date & Time</th>
              <th>Psychologist</th>
              <th>Psychologist Image</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id}>
          <td>{a.id}</td>
          <td>{a.name}</td>
          <td>{a.phone}</td>
          <td>{a.email}</td>
          <td>{a.reason}</td>
          <td>
            {a.appointmentDate.slice(0, 10)}{" "}
            {a.startTime} - {a.endTime}
          </td>
          <td>{a.psychologist?.fullName || "-"}</td>
          <td>
            {a.psychologist?.image ? (
              <Image
                width={100}
                height={100}
                src={a.psychologist.image}
                alt="psychologist"
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
