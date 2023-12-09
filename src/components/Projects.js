import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../index.css'
import { Button } from '@mui/material';


function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const sliderImageUrl = [
    {
      imageUrl: require('../assets/foodPantry.png'),
      title:"Food Pantry Notification System (JavaScript, PHP)",
      description: "A notification system with full CRUD functionality for students at Portland Community College to inform them about ongoing specials",
      githubLink: "https://github.com/yourgithub/project1",
      demoLink: "https://demo.project1.com"
    },
    {
      imageUrl: require('../assets/SkyCast.png'),
      title:"Weather Site (React)",
      description: "A website that presents weather information by allowing users to select a specific city, enter their desired location, or access their current location",
      githubLink: "https://github.com/kylemiller13/weather_site",
      demoLink: "https://kylesweathersite.netlify.app/"
    },
    {
      imageUrl: require('../assets/BikeGallery.png'),
      title:"Bike Gallery (Ruby on Rails)",
      description: "A bike shop website with full CRUD functionality, Devise Authentication, Active Storage and AWS. Authorized admins can upload and manage photos",
      githubLink: "https://github.com/pangtodd/bike_gallery",
    },
    //Third image url
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
    },
  
    //Fourth image url
  
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
    }
  ];
  return (
    <React.Fragment>
      <div className="Carousel">
      <h1>Projects</h1>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          autoPlaySpeed={60000}
          dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((project, index) => (
            <div className="slider" key={index}>
              <img src={project.imageUrl} alt="projects" />
              <h3 className="project-description">{project.title} </h3>
              <p className="project-description">{project.description}</p>
              <div className="button-container">
                <Button variant="contained" color="primary" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Button>
                {project.demoLink && ( 
                  <Button variant="contained" color="secondary" href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </Button>
                )}
              </div>
            </div>
            
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
}

export default Projects;