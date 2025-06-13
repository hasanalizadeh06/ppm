"use client";
import Breadcumb from "@/components/common/Breadcumb";
import Image from "next/image";
import { redirect, useParams } from "next/navigation";
import { IoArrowForward } from "react-icons/io5";
import img from "@/assets/about/1.png";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";
import { useEffect, useState } from "react";
import axios from "axios";

interface Blog {
  id: number;
  title: {
    az: string;
    ru: string;
    en: string;
  };
  description: {
    az: string;
    ru: string;
    en: string;
  };
  coverImage?: string;
  image?: string;
  videos?: string;
}

const BlogDetailsArea = () => {
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    if (!params?.id) return;
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${params.id}`
        );
        setBlog(res.data);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
        redirect("/blog");
      }
    };
    fetchBlog();
  }, [params?.id]);

  useEffect(() => {
    if (!blog) return;
    const fetchRelatedBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`
        );
        const filtered = res.data.data.filter((b: Blog) => b.id !== blog.id);
        setRelatedBlogs(filtered.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch related blogs:", error);
      }
    };
    fetchRelatedBlogs();
  }, [blog]);

  return (
    <div className="blog-details">
      <Breadcumb>
        home <IoArrowForward /> blogs <IoArrowForward /> {params.id}
      </Breadcumb>
      {!blog ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>{blog.title?.az}</h1>
          <Image
            src={blog.coverImage || img}
            width={100}
            height={100}
            alt="Service Details"
            className="image"
          />
          <p>{blog.description?.az}</p>
        </>
      )}
      <p className="navigation">
        {relatedBlogs[0] && (
          <Link href={`/blog/${relatedBlogs[0].id}`} className="back">
            <IoArrowBackOutline /> PREVIOUS BLOG
          </Link>
        )}{" "}
        {relatedBlogs[1] && (
          <Link href={`/blog/${relatedBlogs[1].id}`} className="next">
            NEXT BLOG <IoArrowForward />
          </Link>
        )}
      </p>
      <div className="other-blogs">
        <div className="header">OTHER BLOGS</div>
        <div className="content">
          {relatedBlogs.map((related) => (
            <Link
              href={`/blog/${related.id}`}
              key={related.id}
              className="psychologist-card"
              style={{
                backgroundImage: `url(${
                  related.coverImage || related.image || img
                })`,
              }}
            >
              <div className="info">
                <div className="name">{related.title.az}</div>
                <div className="title">
                  {related.description.az.length > 10
                    ? related.description.az.slice(0, 10) + "..."
                    : related.description.az}
                </div>
                <RxArrowTopRight className="linker" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
