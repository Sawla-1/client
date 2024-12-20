import "../../styles.css";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// ScrollToHash Component
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const desktopNavRef = useRef(null);
  const hamburgerNavRef = useRef(null);
  const prevScrollPosRef = useRef(window.pageYOffset);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu after clicking an option
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll event logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Show or hide the navbar based on scroll direction
      if (prevScrollPosRef.current > currentScrollPos) {
        desktopNavRef.current.style.top = "0";
        hamburgerNavRef.current.style.top = "0";
      } else {
        desktopNavRef.current.style.top = "-110px";
        hamburgerNavRef.current.style.top = "-110px";
      }

      // Change background color when scrolling past a certain point
      if (currentScrollPos > 100) {
        desktopNavRef.current.style.backgroundColor = "white";
        hamburgerNavRef.current.style.backgroundColor = "white";
      } else {
        desktopNavRef.current.style.backgroundColor = "transparent";
        hamburgerNavRef.current.style.backgroundColor = "transparent";
      }

      // Update the previous scroll position
      prevScrollPosRef.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
    };
  }, []);

  return (
    <>
      {/* Include ScrollToHash */}
      <ScrollToHash />

      {/* Desktop Screen Nav-Bar */}
      <nav id="desktop-nav" ref={desktopNavRef} className="navbar">
        <div className="logo">
          <Link to="/#profile" className="linkLogo">Sheenay</Link>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/#about" className="link">About</Link>
            </li>
            <li>
              <Link to="/#experience" className="link">Experience</Link>
            </li>
            <li>
              <Link to="/#projects" className="link">Projects</Link>
            </li>
            <li>
              <Link to="/#contact" className="link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Screen Menu Bar */}
      <nav id="hamburger-nav" ref={hamburgerNavRef} className="navbar">
        <div className="logo">
          <Link to="/#profile" className="linkLogo">Sheenay</Link>
        </div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <Link to="/#about" className="link" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/#experience" className="link" onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/#projects" className="link" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
