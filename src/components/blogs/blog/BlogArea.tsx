"use client";

import Breadcumb from "@/components/common/Breadcumb";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { RxArrowTopRight } from "react-icons/rx";

import img1 from "@/assets/about/3.png";
import Link from "next/link";


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

const BlogArea = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`).then((res) => {
      setBlogs(res.data.data);
    });
  }, []);

  return (
   <section className="blogs-page">
     <Breadcumb>
      home <IoArrowForward /> blogs
     </Breadcumb>
     <div className="header">LOREM IMPUS</div>
     {[0, 1, 2].map((groupIdx) => {
      const groupBlogs = blogs.slice(groupIdx * 3, groupIdx * 3 + 3);
      const hasThree = groupBlogs.length === 3;
      return (
        <div className="content" key={groupIdx}>
         <div className="psychologists">
           {groupBlogs.map((blog, idx) => {
            let isSmall = false;
            if (hasThree) {
              if (groupIdx % 2 === 0) {
               isSmall = idx === 1;
              } else {
               isSmall = idx === 0 || idx === 2;
              }
            } else {
              isSmall = true;
            }
            return (
              <div
               className={"psychologist-card" + (isSmall ? " small" : "")}
               key={blog.id}
               style={{
                  backgroundImage: `url(${blog.coverImage || blog.image || img1})`,
               }}
              >
               <div className="info">
                 <div className="name">{blog.title.az}</div>
                 <div className="title">{blog.description.az}</div>
                 <Link href={`/blog/${blog.id}`}>
                     <RxArrowTopRight className="linker" />
                 </Link>
               </div>
              </div>
            );
           })}
         </div>
        </div>
      );
     })}
   </section>
  );
};

export default BlogArea;
