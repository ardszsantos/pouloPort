import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";


export const Navbar: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header>
            <p><a href="#home">PEDRO POULOS</a></p>
            <div className="mobileMenuIcon">
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
            </div>
            <nav className={isOpen ? "navOpen" : "navClosed"}>
                <a href="#work">Work</a>
                <a href="#journey">Journey</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
            </nav>
            <p className="navLastP">Beyond the Bio</p>
        </header>
    );
};
