import React, {useState} from 'react'
import BlogP from '../../components/Blog/BlogP'


const BlogPage = () => {
  return (
    <div>
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[300px]">
      <img
        src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726632208/Rectangle_4278_ylstnh.png" 
        alt="Testimonials Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-xl md:text-xl lg:text-2xl font-semibold">Blog</h1>
        <p className="mt-4 text-sm md:text-base">
          <span>Home</span> / <span>Blog</span>
        </p>
      </div>
    </section>
    <BlogP/>
    </div>
  )
}

export default BlogPage