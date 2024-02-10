// import { Carousel } from 'bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

function Services() {
  
  
    return (
        <Carousel> 
      <Carousel.Item>
      <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-testimonials-1-img.png" class="testimonial-card-image" alt="..." />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-testimonials-1-img.png" class="testimonial-card-image" alt="..." />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-testimonials-1-img.png" class="testimonial-card-image" alt="..." />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Services