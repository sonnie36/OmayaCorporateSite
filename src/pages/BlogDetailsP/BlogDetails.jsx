import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

// Skeleton component for loading state
const BlogSkeletonLoader = () => {
  return (
    <div className="w-4/5 flex flex-col md:flex-row gap-8 justify-center mx-auto mb-12 animate-pulse">
      <div className="w-full md:w-1/2 bg-gray-300 h-64 rounded-md"></div>
      <div className="w-full md:w-1/2">
        <div className="bg-gray-300 h-8 w-3/4 rounded mb-4"></div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <div className="bg-gray-300 h-4 w-20 rounded"></div>
          </div>
          <div className="socials flex justify-between">
            <div className="bg-gray-300 h-4 w-16 rounded"></div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-300 h-8 w-8 rounded-full"></div>
              <div className="bg-gray-300 h-8 w-8 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 h-6 w-full rounded mt-4"></div>
        <div className="bg-gray-300 h-6 w-full rounded mt-2"></div>
        <div className="bg-gray-300 h-6 w-3/4 rounded mt-2"></div>
      </div>
    </div>
  );
};

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString));
  };

  useEffect(() => {
    const fetchBlogById = async () => {
      try {
        const response = await axios.get(`https://omaya-technologies-corporate-backend.vercel.app/blog/get/${id}`);
        setBlog(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching blog:', error);
        setLoading(false); 
      }
    };
    fetchBlogById();
  }, [id]);

  if (loading) return <BlogSkeletonLoader />; 

  return (
    <div>
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[300px] mb-12">
        <img
          src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726632208/Rectangle_4278_ylstnh.png"
          alt="Testimonials Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-xl md:text-xl lg:text-2xl font-semibold">Blog</h1>
          <p className="mt-4 text-sm md:text-base">
            <span>Home</span> / <span>Blog</span> / <span>{blog.title}</span>
          </p>
        </div>
      </section>

      <div className="w-4/5 flex flex-col md:flex-row gap-8 justify-center mx-auto mb-12">
        <div className="w-full md:w-1/2">
          <img src={blog.photo} alt={blog.title} className="w-full rounded-md" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold text-green-700">{blog.title}</h2>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <p>{formatDate(blog.date)}</p>
            </div>

            <div className="flex items-center gap-4">
              <p>Share</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-blue-700">
                  <a href="#"><FaFacebookF className="text-white" /></a>
                </div>
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-blue-500">
                  <a href="#"><FaTwitter className="text-white" /></a>
               </div>
              </div>
      </div>
</div>

          <p className="mt-4 text-gray-600">{blog.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
