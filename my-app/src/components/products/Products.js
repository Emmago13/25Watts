import React from 'react';
import LeftCircle from '../../assets/img/Iconfeather-arrow-left-circle.svg';
import RightCircle from '../../assets/img/Iconfeather-arrow-right-circle.svg';



const Products = () =>{
    return(
        <section id="products" className="section2__products">
            <div className="section2__div--fondo2">
                <div className="section2__div--fondo3">
                    <h3 className="section2__h3">Sed ut perspiciatis</h3>
                    <h2 className="section2__h2">Nemo Enim</h2>
                    <p className="section2__p">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                    <div className="section2__div--img">
                        <a href="javascript">
                            <img src={LeftCircle} alt="Left Circle" />
                        </a>
                        <a href="javascript">
                            <img src={RightCircle} alt="Right Circle" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Products;