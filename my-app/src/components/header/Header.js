import React from "react";
import TopLogo from "../../assets/img/top-logo.svg"


const Header = () => {
    return(
        <header className="header">
            <div>
                <a href="#home">
                    <img src={TopLogo} alt="Logo25Watts"/>
                </a>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>      
            </div>
        </header>
    )
}


export default Header;