import React,{useState} from "react";
import TopLogo from "../../assets/img/top-logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";


const Header = () => {

    const [navBar,setnavBar] = useState(false);
    const [menuIcon, setmenuIcon] = useState(false);
    
    const handlerMenuIcon = () => {
        if (!menuIcon) {
            setmenuIcon(true);
        }else{
            setmenuIcon(false);
        }
    }

    const scrollNav = () =>{
        if (window.scrollY >= 100) {
            setnavBar(true);
        }else{
            setnavBar(false);
        }
    }
    window.addEventListener('resize',scrollNav);
    window.addEventListener('scroll',scrollNav);

    const handlerScrollUp = () => {
        scroll.scrollToTop();
    };


    return(
        <header id="header" className={menuIcon ? 'header onScroll active' : 'header' && navBar ? 'header onScroll' : 'header'}>
            <div>
                <a href="#home">
                    <img src={TopLogo} alt="Logo25Watts" onClick={handlerScrollUp} />
                </a>
                <nav>
                    <ul>
                        <li><Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={300}
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
                            duration={300}
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
                            duration={300}
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
                            duration={300}
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
                            duration={300}
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