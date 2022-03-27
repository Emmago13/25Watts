import React,{ useState, useEffect} from "react";
import TopLogo from "../../assets/img/top-logo.svg";
import { Link } from "react-scroll";


const Header = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [navBar,setnavBar] = useState(false);
    const [menuIcon, setmenuIcon] = useState(false);
    
    const scrollNav = () => {
        let currentValue = window.scrollY;
        if (currentValue >= 100) {
            setnavBar(true);
        }else{
            setnavBar(false);
        }
        if (currentValue >= 100 && prevScrollPos > currentValue) {
            setnavBar(true);
        }else if (prevScrollPos < currentValue) {
            setnavBar(false);
        }
        setPrevScrollPos(currentValue);
    }

    const handlerMenuIcon = () => {
        if (!menuIcon && window.innerWidth < 769) {
            setmenuIcon(true);
        }else{
            setmenuIcon(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", scrollNav)
        return () => {
          window.removeEventListener("scroll", scrollNav)
        }
    })



    return(
        <header id="header" className={menuIcon ? 'header active' : 'header' && navBar ? 'header onScroll' : 'header'} >
            <div>
                <a href="#home">
                    <img src={TopLogo} alt="Logo25Watts" />
                </a>
                <nav>
                    <ul>
                        <li><Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={100}
                            onClick={handlerMenuIcon}>
                            Home
                            </Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={100}
                            onClick={handlerMenuIcon}>
                            About
                            </Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="products"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={100}
                            onClick={handlerMenuIcon}>
                            Products
                            </Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={100}
                            onClick={handlerMenuIcon}>
                            Services
                            </Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={100}
                            onClick={handlerMenuIcon}>
                            Contact
                            </Link>
                        </li>
                    </ul>
                </nav>    
                <div className="menu__icon" onClick={handlerMenuIcon}>
                    <span></span>
                    <span></span>
                </div>  
            </div>
        </header>
    )
}


export default Header;