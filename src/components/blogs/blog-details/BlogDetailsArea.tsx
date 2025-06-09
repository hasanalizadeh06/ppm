"use client";
import Breadcumb from "@/components/common/Breadcumb";
import Image from "next/image";
import { useParams } from "next/navigation";
import { IoArrowForward } from "react-icons/io5";
import img from "@/assets/about/1.png";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

const BlogDetailsArea = () => {
  const params = useParams();
  return (
    <div className="blog-details">
      <Breadcumb>
        home <IoArrowForward /> blogs <IoArrowForward /> {params.id}
      </Breadcumb>
      <h1>LOREM IMPUS</h1>
      <Image src={img} alt="Service Details" className="image" />
      <p>
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
        ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
        amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
        dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
        ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
        amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
        dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
        ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
        amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
        dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
        ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
        amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
        dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
        ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
        amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
        dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
        ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
        amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
        dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet{" "}
      </p>
      <p className="navigation">
        <Link href="/" className="back">
          <IoArrowBackOutline /> PREVIOUS BLOG
        </Link>{" "}
        <Link href="/" className="next">
          NEXT BLOG <IoArrowForward />
        </Link>
      </p>
      <div className="other-blogs">
        <div className="header">OTHER BLOGS</div>
        <div className="content">
          <div className="psychologist-card">
            <div className="info">
              <div className="name">LOREM IPSUM</div>
              <div className="title">27.02.2025</div>
              <RxArrowTopRight className="linker" />
            </div>
          </div>
          <div className="psychologist-card small">
            <div className="info">
              <div className="name">LOREM IPSUM</div>
              <div className="title">27.02.2025</div>
              <RxArrowTopRight className="linker" />
            </div>
          </div>
          <div className="psychologist-card">
            <div className="info">
              <div className="name">LOREM IPSUM</div>
              <div className="title">27.02.2025</div>
              <RxArrowTopRight className="linker" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
