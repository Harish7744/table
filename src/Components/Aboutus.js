import React from 'react'

function Aboutus() {
//   const ourteam = [
//     {
//         name:"Harish",
//         Designation:"Software",
//         Adress:"Visakapatnam",

//     },
//     {
//         name:"Naresh",
//         Designation:"Software",
//         Adress:"Visakapatnam",
        
//     },
//     {
//         name:"Shadrak",
//         Designation:"Software",
//         Adress:"Hyderabad",
        
//     }
//   ]
    return (
        
    <div>
        <h1 style={{textAlign:'center', fontWeight:'bold', color:'Red'}}>Our Portfolio</h1>
        <body>
        <div class="services-section pt-5 pb-5">
        <div>
            <div class="row">
                <div class="col-12">
                    <h1 class="services-section-sub-heading mb-3" style={{textAlign:'center'}}>services</h1>
                    <h1 class="services-section-heading" style={{textAlign:'center', fontSize:40, color:'yellow'}}>What We do</h1>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="shadow services-card mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-web-design-img.png" class="services-card-image" />
                        <h1 class="services-card-title mt-2">Static Website</h1>
                        <p class="services-card-description"> a static website contains web page each page page isdevoloped using HTML CSS and bootstrap classes</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="shadow services-card mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-web-development-img.png" class="services-card-image" />
                        <h1 class="services-card-title mt-2">Static Responsive Web design</h1>
                        <p class="services-card-description"> a static website contains web page each page page isdevoloped using HTML CSS and bootstrap classes</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="shadow services-card mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-customize-img.png" class="services-card-image" />
                        <h1 class="services-card-title mt-2">Custamaisable Lay out</h1>
                        <p class="services-card-description"> a static website contains web page each page page isdevoloped using HTML CSS and bootstrap classes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="work-done-section pt=5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-4 text-center">
                    <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                    <hr class="hr-line" />
                    <h1 class="work-done-card-title">10</h1>
                    <h1 class="work-done-card-sub-title">Projects Completed</h1>
                </div>
                <div class="col-4 text-center">
                    <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                    <hr class="hr-line" />
                    <h1 class="work-done-card-title">2800</h1>
                    <h1 class="work-done-card-sub-title">Lines Of Code</h1>
                </div>
                <div class="col-4 text-center">
                    <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                    <hr class="hr-line" />
                    <h1 class="work-done-card-title">15</h1>
                    <h1 class="work-done-card-sub-title">Hours worked</h1>
                </div>
            </div>
        </div>
    </div>

    <div class="testimonial-section pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="testimonial-section-sub-heading mb-3">Testimonials</h1>
                    <h1 class="testimonial-section-heading">Our members Say</h1>
                </div>
                <div class="col-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="testimonial-card text-center">
                                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-testimonials-1-img.png" class="testimonial-card-image" alt="..." />
                                    <p class="testimonial-card-description">
                                        Harish is one the best hard working devolopr and it was a pleasure work with him. Having him on the project certainly made everything running smoother</p>
                                    <p class="testimonial-card-person-name">
                                        -Goutham, Founder of Cocopay Company</p>
                                </div>
                            </div>
                            {/* <div class="carousel-item">
                                <div class="testimonial-card text-center">
                                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-testimonials-1-img.png" class="testimonial-card-image" alt="..." />
                                    <p class="testimonial-card-description">Harish is one the best hard working devolopr and it was a pleasure work with him. Having him on the project certainly made everything running smoother</p>
                                    <p class="testimonial-card-person-name">-Rosemary, Founder of Cocopay Company</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="testimonial-card text-center">
                                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-testimonials-1-img.png" class="testimonial-card-image" alt="..." />
                                    <p class="testimonial-card-description">Harish is one the best hard working devolopr and it was a pleasure work with him. Having him on the project certainly made everything running smoother</p>
                                    <p class="testimonial-card-person-name">-Riya, Founder of Cocopay Company</p>
                                </div>
                            </div> */}
                        </div>
                        <div class="mt-3 text-right">
                            {/* <a href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
        {/* {
            ourteam.map((team)=> {
                return(
                    <div className='teamDetails'>
                        <h2>Name : {team.name}</h2>
                        <h2>Designation : {team.Designation}</h2>
                        <h2>Adress : {team.Adress}</h2>
                    </div>
                )
            })
        } */}
    </div>
    
    
  )
}

export default Aboutus