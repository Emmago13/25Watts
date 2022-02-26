import React from 'react';
import {Carousel, Button} from 'react-bootstrap'
import BackImg from '../../assets/img/slider-1@2x.png'


const Hero = () =>{
    return(
        <section id="home" className="section_home">
            <Carousel controls={false}>
                <Carousel.Item>
                  <img
                    src={BackImg}
                    alt="First slide"
                    loading='lazy'
                  />
                  <Carousel.Caption>
                    <h1>Sed ut perspiciatis<br/>unde omnis iste natus</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error<br/>sit voluptatem accusantium doloremque.</p>
                    <Button href="#about">Read More</Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={BackImg}
                    alt="Second slide"
                    loading='lazy'
                  />
                  <Carousel.Caption>
                    <h1>Sed ut perspiciatis<br/>unde omnis iste natus</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur duo<br/>sadipscing elitr, sed diam nonumy.</p>
                    <Button href="#about">Read More</Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={BackImg}
                    alt="Third slide"
                    loading='lazy'
                  />
                  <Carousel.Caption>
                    <h1>Sed ut perspiciatis<br/>unde omnis iste natus</h1>
                    <p>At vero eos et accusam et justo duo dolores<br/>et ea rebum, stet clita kasd gubergren.</p>
                    <Button href="#about">Read More</Button>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}


export default Hero;