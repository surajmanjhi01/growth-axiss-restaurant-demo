import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <nav>
        <div className="logo">SkyDine</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              isHome ? (
                <ScrollLink
                  to={element.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={element.id}
                  onClick={() => setShow(false)}
                >
                  {element.title}
                </ScrollLink>
              ) : (
                <Link
                  to={`/#${element.link}`}
                  key={element.id}
                  onClick={() => setShow(false)}
                >
                  {element.title}
                </Link>
              )
            ))}
          </div>
          <Link to="/menu">
            <button className="menuBtn">OUR MENU</button>
          </Link>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
