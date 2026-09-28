import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsMain = () => {
  const testimonials = [
    {
      name: "Omar Ali",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imgSrc: "https://res.cloudinary.com/dam1sxczj/image/upload/v1726633543/Ellipse_85_t9dgrs.png"
    },
    {
      name: "Omar Ali",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imgSrc: "https://res.cloudinary.com/dam1sxczj/image/upload/v1726633543/Ellipse_85_t9dgrs.png"
    },
    {
      name: "Omar Ali",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imgSrc: "https://res.cloudinary.com/dam1sxczj/image/upload/v1726633543/Ellipse_85_t9dgrs.png"
    },
    {
      name: "Omar Ali",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imgSrc: "https://res.cloudinary.com/dam1sxczj/image/upload/v1726633543/Ellipse_85_t9dgrs.png"
    },
    {
      name: "Omar Ali",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imgSrc: "https://res.cloudinary.com/dam1sxczj/image/upload/v1726633543/Ellipse_85_t9dgrs.png"
    }
  ];

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgba(55, 167, 147, 1)", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgba(55, 167, 147, 1)", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true, 
    autoplaySpeed: 2500, 
    responsive: [
      {
        breakpoint: 800, 
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
      <div className="w-full max-w-4xl h-full p-10">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="flex justify-center" key={index}>
              <div className="whole bg-white p-6 rounded-lg border shadow-md mx-4 h-[350px]">
                <div className="diamond1" style={{
                    width:"70px",
                    height:"70px",
                    borderRadius: "5px",
                    backgroundColor: "rgba(55, 167, 147, 0.1)",
                    position: "absolute",
                    top:"160px",
                    transform:"rotate(45deg)", 
                }}></div>
                <div className="smallDiamond3"></div>
                <div className="text">
                  <div className="quote-image p-4">
                    <img src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726500200/Group_3_phvs0n.png" alt="" className="w-16 h-18" />
                  </div>
                  <p className="text-gray-900">
                    {testimonial.text}
                  </p>
                </div>
                <div className="profile-sec flex items-center mt-4">
                  <img src={testimonial.imgSrc} alt="" className="w-12 h-12 rounded-full mr-4" />
                  <p className="font-bold">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialsMain;
