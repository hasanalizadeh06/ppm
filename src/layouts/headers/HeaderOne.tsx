"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { IoMdMenu } from "react-icons/io";

import logo from "@/assets/about/4.png";
import MobileSidebar from "./menu/MobileSidebar";
import { useState } from "react";
import { usePathname } from "next/navigation";

const HeaderOne = () => {
  const [isActive, setIsActive] = useState(false);
  const t = useTranslations("Navbar");
  
  const link = usePathname().split("/")[2];

  if (link === "auth") {
    return null; 
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link href="/">
            <Image className="img" src={logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link href="about-us">{t("about")}</Link>
            </li>
            <li>
              <Link href="services">{t("services")}</Link>
            </li>
            <li>
              <Link href="blog">{t("blog")}</Link>
            </li>
            <li>
              <Link href="faq">{t("faq")}</Link>
            </li>
            <li>
              <Link href="contact">{t("contact")}</Link>
            </li>
          </ul>
        </div>
        <div className="register">
          <Link href="register">{t("register")}</Link>
        </div>
        <div className="mobile-button">
          <IoMdMenu onClick={() => setIsActive(true)} />
        </div>
      </div>
      <MobileSidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default HeaderOne;
