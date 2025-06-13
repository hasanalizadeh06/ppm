"use client";

import React, { use, useEffect } from "react";
import Image from "next/image";
import { TbLogout } from "react-icons/tb";
import { MdOutlineAddAPhoto } from "react-icons/md";
import img from "@/assets/img/team/team_img01.png";
import Link from "next/link";
import { BiSolidDashboard } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdPsychology } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { usePathname, useRouter } from "next/navigation";

const AdminNav = () => {
  const router = useRouter();

  const accessToken =
    typeof window !== "undefined"
      ? document.cookie
          .split("; ")
          .find((row) => row.startsWith("accessToken="))
          ?.split("=")[1]
      : undefined;

  const handleExitProfile = () => {
    document.cookie =
      "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/auth/login");
  };

  const path = usePathname();
  useEffect(() => {
    router.refresh();
  }, [path, accessToken, router]);

  return (
    <aside className="auth-navbar">
      {accessToken && (
        <div className="auth-profile">
          <Image
            width={100}
            height={100}
            src={img}
            alt="Profile"
            className="auth-profile-image"
          />
          <div className="auth-profile-info">
            <span className="auth-profile-name">John Doe</span>
            <span className="auth-profile-role">Admin</span>
          </div>
        </div>
      )}
      <div className="auth-section-divider" />
      <nav>
        <ul className="auth-navbar-list">
          <li className="auth-navbar-item">
            <Link
              aria-disabled="true"
              href="/auth/login"
              className="auth-navbar-link"
            >
              <GrUserAdmin
                className={`icons ${accessToken ? "error" : "success"}`}
              />{" "}
              <span className="text">Login</span>{" "}
              {accessToken ? (
                <FaLock className="icons-right error-icon" />
              ) : (
                <FaUnlock className="icons-right success-icon" />
              )}
            </Link>
          </li>
          <li className="auth-navbar-item">
            <Link href="/auth/admin/dashboard" className="auth-navbar-link">
              <BiSolidDashboard
                className={`icons ${accessToken ? "success" : "error"}`}
              />{" "}
              <span className="text">Dashboard</span>{" "}
              {accessToken ? (
                <FaUnlock className="icons-right success-icon" />
              ) : (
                <FaLock className="icons-right error-icon" />
              )}
            </Link>
          </li>
          <li className="auth-navbar-item">
            <Link href="/auth/admin/blogs" className="auth-navbar-link">
              <MdOutlineAddAPhoto
                className={`icons ${accessToken ? "success" : "error"}`}
              />{" "}
              <span className="text">Blogs</span>{" "}
              {accessToken ? (
                <FaUnlock className="icons-right success-icon" />
              ) : (
                <FaLock className="icons-right error-icon" />
              )}
            </Link>
          </li>
          <li className="auth-navbar-item">
            <Link href="/auth/admin/services" className="auth-navbar-link">
              <RiCustomerService2Fill
                className={`icons ${accessToken ? "success" : "error"}`}
              />{" "}
              <span className="text">Services</span>{" "}
              {accessToken ? (
                <FaUnlock className="icons-right success-icon" />
              ) : (
                <FaLock className="icons-right error-icon" />
              )}
            </Link>
          </li>
          <li className="auth-navbar-item">
            <Link href="/auth/admin/psychologist" className="auth-navbar-link">
              <MdPsychology
                className={`icons ${accessToken ? "success" : "error"}`}
              />{" "}
              <span className="text">Psychologists</span>{" "}
              {accessToken ? (
                <FaUnlock className="icons-right success-icon" />
              ) : (
                <FaLock className="icons-right error-icon" />
              )}
            </Link>
          </li>
          <li className="auth-navbar-item">
            <Link href="/auth/admin/appointments" className="auth-navbar-link">
              <SiGooglemeet
                className={`icons ${accessToken ? "success" : "error"}`}
              />{" "}
              <span className="text">Appointments</span>{" "}
              {accessToken ? (
                <FaUnlock className="icons-right success-icon" />
              ) : (
                <FaLock className="icons-right error-icon" />
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="auth-section-divider" />
      {accessToken && (
        <button className="auth-exit-profile-btn" onClick={handleExitProfile}>
          <TbLogout className="exit-icon" />{" "}
          <span className="text">Exit Profile</span>
        </button>
      )}
    </aside>
  );
};

export default AdminNav;
