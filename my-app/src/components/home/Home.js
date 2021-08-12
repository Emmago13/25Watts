import React from 'react';




const Inicio = () =>{
    return(
        <section id="home" className="section_inicio">
            <h1>Sed ut perspiciatis<br/>unde omnis iste natus</h1>
            <h2>Sed ut perspiciatis unde omnis iste natus error<br/>sit voluptatem accusantium doloremque.</h2>
            <a href="#about"><button>Read more</button></a>
            <ul className="slider">
                <li>
                    <a href="#home" className="slider__1">1</a>
                </li>
                <li>
                    <a href="#home" >2</a>
                </li>
                <li>
                    <a href="#home" >3</a>
                </li>
            </ul>
        </section>
    )
}


export default Inicio;