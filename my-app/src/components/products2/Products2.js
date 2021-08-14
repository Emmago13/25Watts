import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProductsImg from '../../assets/img/section3-image.png';
// import LeftCircle from '../../assets/img/Iconfeather-arrow-left-circle.svg';
// import RightCircle from '../../assets/img/Iconfeather-arrow-right-circle.svg';

const Products2 = () =>{
    return(
        <section id="products" className="section2__products">
            <Carousel indicators={false} autoPlay={false}>
                <Carousel.Item>
                  <img
                    src={ProductsImg}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 className="section2__h3">Sed ut perspiciatis</h3>
                    <h2 className="section2__h2">Nemo Enim</h2>
                    <p className="section2__p">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={ProductsImg}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className="section2__h3">Sed ut perspiciatis</h3>
                    <h2 className="section2__h2">Nemo Enim</h2>
                    <p className="section2__p">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Products2;