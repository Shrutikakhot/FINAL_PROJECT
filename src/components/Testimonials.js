import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <Slider {...settings}>
        <div className="testimonial">
          <p>"Rent IT provided the best computer rental experience I've ever had. Their service was fast, efficient, and incredibly affordable."</p>
          <p>- Alice Brown</p>
        </div>
        <div className="testimonial">
          <p>"I needed a high-performance computer for a short-term project, and Rent IT delivered exactly what I needed, right on time."</p>
          <p>- Bob Williams</p>
        </div>
        <div className="testimonial">
          <p>"The customer support from Rent IT is exceptional. They were quick to respond and helped me choose the perfect rental for my needs."</p>
          <p>- Carol Davis</p>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
