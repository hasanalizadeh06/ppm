"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";

import logo from "@/assets/img/logo/logo2.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const FooterOne = () => {
  const t = useTranslations("Footer");

  const link = usePathname().split("/")[2];

  if (link === "auth") {
    return null; 
  }

  return (
    <footer className="footer">
      <div className="upper">
        <div className="left">
          <Image src={logo} alt="" />
        </div>
        <div className="right">
          <div className="id-1">
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
          <div className="id-2">
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaWhatsapp />
              </li>
              <li>
                <FaTelegramPlane />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="left">
          <div className="support">
            <div className="id-2">
              <div className="header">
                <Link href="about-us">{t("about")}</Link>
              </div>
              <div className="content">
                <ul>
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
            </div>
            <div className="id-1">
              <div className="header">{t("support")}</div>
              <div className="content">
                <ul>
                  <li>
                    <Link href="help-center">{t("help-center")}</Link>
                  </li>
                  <li>
                    <Link href="privacy-policy">{t("privacy-policy")}</Link>
                  </li>
                  <li>
                    <Link href="terms-conditions">{t("terms-conditions")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="header">{t("contact")}</div>
            <div className="content">
              <ul>
                <li>
                  <a>
                    <BsTelephone /> 051 555 55 55
                  </a>
                </li>
                <li>
                  <a>
                    <HiOutlineLocationMarker /> {t("place")}
                  </a>
                </li>
                <li>
                  <a>
                    <IoMailOutline /> loremimpus@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaWhatsapp />
            </li>
            <li>
              <FaTelegramPlane />
            </li>
          </ul>
        </div>
      </div>
      <div className="bothrefm">{t("copyright")}</div>
    </footer>
  );
};

export default FooterOne;
