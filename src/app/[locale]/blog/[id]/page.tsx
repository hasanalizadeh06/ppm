import BlogDetails from '@/components/blogs/blog-details'
import React from 'react'

interface PageProps {
  params: { id: string }
}

export const metadata = {
  title: "PPM - Blog Details",
};

function page({ params }: PageProps) {
  return (
    <BlogDetails/>
  )
}

export default page