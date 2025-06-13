"use client";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";

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

function page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const accessToken = getCookie("accessToken");
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setBlogs(res.data.data);
      });
  }, []);
  return (
    <>
      <div className="header">
        <div>Blogs</div>
        <Link className="create-btn" href="/auth/admin/blogs/create">
          <MdOutlineAddAPhoto /> <span className="text">Create blog</span>
        </Link>
      </div>
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Cover Image</th>
              <th>Image</th>
              <th>Videos</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length > 0 && blogs.map((blog) => (
              <tr key={blog.id}>
                <td>
                  AZ: <span title={blog.title.az}>{blog.title.az.length > 20 ? blog.title.az.slice(0, 20) + "..." : blog.title.az}</span>
                  <div className="line" style={{ height: "2px", background: "blue", margin: "4px 0" }} />
                  RU: <span title={blog.title.ru}>{blog.title.ru.length > 20 ? blog.title.ru.slice(0, 20) + "..." : blog.title.ru}</span>
                  <div className="line" style={{ height: "2px", background: "blue", margin: "4px 0" }} />
                  EN: <span title={blog.title.en}>{blog.title.en.length > 20 ? blog.title.en.slice(0, 20) + "..." : blog.title.en}</span>
                </td>
                <td>
                  AZ: <span title={blog.description.az}>{blog.description.az.length > 20 ? blog.description.az.slice(0, 20) + "..." : blog.description.az}</span>
                  <div className="line" style={{ height: "2px", background: "blue", margin: "4px 0" }} />
                  RU: <span title={blog.description.ru}>{blog.description.ru.length > 20 ? blog.description.ru.slice(0, 20) + "..." : blog.description.ru}</span>
                  <div className="line" style={{ height: "2px", background: "blue", margin: "4px 0" }} />
                  EN: <span title={blog.description.en}>{blog.description.en.length > 20 ? blog.description.en.slice(0, 20) + "..." : blog.description.en}</span>
                </td>
                <td>
                  {blog.coverImage ? (
                    <Image
                      src={blog.coverImage}
                      alt="cover"
                      className="blog-img"
                      width={100}
                      height={100}
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  {blog.image ? (
                    <Image width={100} height={100} src={blog.image} alt="image" className="blog-img" />
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  {blog.videos ? (
                    <video width={120} height={80} controls>
                      <source src={blog.videos} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
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