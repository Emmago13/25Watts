import React from 'react';




const Inicio = () =>{
    return(
        <section id="inicio" className="section_inicio">
            <h1>Sed ut perspiciatis<br/>unde omnis iste natus</h1>
            <h2>Sed ut perspiciatis unde omnis iste natus error<br/>sit voluptatem accusantium doloremque.</h2>
            <a href="#about"><button>Read more</button></a>
            <ul className="slider">
                <li>
                    <a href="#inicio" className="slider__1">1</a>
                </li>
                <li>
                    <a href="#inicio" >2</a>
                </li>
                <li>
                    <a href="#inicio" >3</a>
                </li>
            </ul>
        </section>
    )
}


export default Inicio;