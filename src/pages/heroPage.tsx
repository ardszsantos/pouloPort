import React  from "react";
import music from "../assets/music.png";
import Mmusic from "../assets/mobileMUsic.png";
import { FaFigma, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const HeroPage: React.FC = () => {


    return (
        <section id="home" className="heroSection">
            <div className="heroWrapper">
                <div className="leftSide">
                    <p>Heyyo 🫳, I’m </p>
                    <h1>PEDRO POULOS</h1>
                    <p>A curiosity driven frontend developer with design chops.</p>
                    <p>I believe its OK to be you, You is dope!</p>
                    <div className="socials">
                        <FaGithub size={24} />
                        <FaXTwitter size={24} />
                        <FaFigma size={24} />
                    </div>
                </div>
                <div className="rightSide">
                    <img className="desktopImg" src={music} alt="" />
                    <img className="mobileImg"src={Mmusic} alt="" />
                </div>
            </div>
        </section>
    );
};
