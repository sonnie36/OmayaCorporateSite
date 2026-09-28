import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BlogP.css';

const SkeletonLoader = () => {
  return (
    <div className="flex border rounded-lg overflow-hidden shadow-lg animate-pulse">
      <div className="w-1/3 bg-gray-300 h-48"></div>
      <div className="p-6 w-2/3">
        <div className="bg-gray-300 h-6 w-1/2 mb-4"></div>
        <div className="bg-gray-300 h-4 w-3/4 mb-2"></div>
        <div className="bg-gray-300 h-4 w-1/2"></div>
      </div>
    </div>
  );
};

const BlogP = () => {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 8;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://omaya-technologies-corporate-backend.vercel.app/blog/all');
        setBlogData(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false); 
      }
    };
    fetchBlogs();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col">
      <h1 className="text-2xl font-bold text-center mb-8 text-green-700">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {loading
    ? Array(postsPerPage).fill(0).map((_, index) => <SkeletonLoader key={index} />)
    : currentPosts.map((post) => (
      <div key={post.id} className="flex border rounded-lg overflow-hidden shadow-lg" id='blog'>
        <img
          className="w-1/3 object-cover" 
          src={post.photo}
          alt={post.title}
        />
        <div className="p-6 w-2/3 sm:w-full" id='blog-content'>  
          <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
          <p className="text-gray-600 mt-2">{post.shortDesc}</p>
          <Link to={`/blog/${post.id}`} className="text-green-600 hover:underline mt-4 block">
            Read more
          </Link>
        </div>
      </div>
    ))
  }
</div>



      <div className="flex justify-center mt-8">
        <nav aria-label="Pagination">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`py-2 px-3 ml-0 leading-tight border rounded-full mr-3 ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed '
                    : 'bg-white text-gray-500 border-gray-300 hover:bg-green-600 hover:text-white'
                }`}
              >
                &lt;
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className=''>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`py-2 px-3 leading-tight mr-1 rounded-full ${
                    currentPage === index + 1
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-500'
                  } border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                &gt;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BlogP;
