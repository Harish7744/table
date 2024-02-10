import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function Services() {
  
    return (
      <>
        <Carousel className='Courisel' style={{marginTop:30}}> 
          <Carousel.Item className="text-center">
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-testimonials-1-img.png" class="testimonial-card-image" alt="..." />
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-testimonials-1-img.png" class="testimonial-card-image" alt="..." />
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-testimonials-1-img.png" class="testimonial-card-image" alt="..." />
          </Carousel.Item>
        </Carousel>
        <h1>Harish</h1>
        <p>ugqgyus uxgugsxyg ygxasgx</p>
      </>
  );
}

export default Services;
