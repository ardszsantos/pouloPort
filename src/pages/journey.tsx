import React from "react";
import { TechBadge } from "../components/techBadge";
import { SiArduino, SiCashapp, SiCplusplus, SiCss3, SiHtml5, SiMysql, SiPhp, SiPython, SiUipath, SiWordpress } from "react-icons/si";



export const JourneyPage: React.FC = () => {


    return (
        <section className="journeySection">
            <h1>A BIT 'BOUT MY JOURNEY</h1>
            <p className="firstP">
            I’m a freelance frontend developer based in Ahmedabad, India, with almost 6 years of experience. My journey started at an MNC, then I moved to a startup where I had the chance to build some cool projects that taught me a ton. I began with JavaScript, built apps using Angular, and then switched to React, where I had the opportunity to work on projects from scratch that really shaped my skills in JS and UI development.
            I don't dive into the back-end too often, but in case you're wondering, I know Node.js, Express & MongoDB. Just a peek behind the curtain!
            </p>
            <p>I’ve always been passionate about working on projects that push me to grow, learn new things, and collaborate with great people. This led me to take the leap into freelancing, where I’ve had the chance to work with awesome clients. Right now, I’m working with a cool startup, building sleek UIs with Next.js, Typescript, Tailwind and more.            </p>
            <p className="lastP">Here’s some tech and frameworks I love and work with:</p>
            
            <div className="techContainer">
                <TechBadge tech="Python" icon={SiPython}/>
                <TechBadge tech="Html" icon={SiHtml5}/>
                <TechBadge tech="Css" icon={SiCss3}/>
                <TechBadge tech="MySql" icon={SiMysql}/>
                <TechBadge tech="PHP" icon={SiPhp}/>
                <TechBadge tech="RPA" icon={SiUipath}/>
                <TechBadge tech="C++" icon={SiCplusplus}/>
                <TechBadge tech="C#" icon={SiCashapp}/>
                <TechBadge tech="Arduino" icon={SiArduino}/>
                <TechBadge tech="WordPress" icon={SiWordpress}/>
            </div>

            <p>
            <b>Fun fact</b> : I’ve been learning Figma just for fun, mainly to create templates and get a feel for how the tool works. It’s been a great way to boost my creativity and help me design UIs more intuitively. One day, I thought, what better way to apply my Figma knowledge than by designing my own portfolio? And here it is – my very first Figma project!
            </p>
            <p className="actualLastP">Learning advanced TypeScript is something I’m working on, and I try to dedicate time to it whenever I can.
            </p>
        </section>
    );
};
