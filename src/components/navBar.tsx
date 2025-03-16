import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";


export const Navbar: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header>
            <p>PEDRO POULOS</p>
            <div className="mobileMenuIcon">
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
            </div>
            <nav className={isOpen ? "navOpen" : "navClosed"}>
                <a href="#">Work</a>
                <a href="#">Journey</a>
                <a href="#">Testimonials</a>
                <a href="#">Contact</a>
            </nav>
            <p className="navLastP">Beyond the Bio</p>
        </header>
    );
};
