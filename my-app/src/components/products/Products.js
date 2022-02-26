import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



const Products = () =>{
    return(
        <section id="products" className="section2__products">
            <div>
              <Carousel indicators={false} interval={null}>
                  <Carousel.Item>
                    <div></div>
                    <Carousel.Caption>
                      <h3 className="section2__h3">Sed ut perspiciatis</h3>
                      <h2 className="section2__h2">Nemo Enim</h2>
                      <p className="section2__p">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div></div>
                    <Carousel.Caption>
                      <h3 className="section2__h3">At vero eos et accusam</h3>
                      <h2 className="section2__h2">Sanctus Dolor</h2>
                      <p className="section2__p">
                          At vero eos et accusam etjusto duo dolores et ea rebum, stet clita kasd gubergren, sea takimata sanctus dolor sit amet.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
            </div>
        </section>
    )
}

export default Products;