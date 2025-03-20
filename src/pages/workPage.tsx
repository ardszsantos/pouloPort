import React from "react";
import { WorkCard } from "../components/workCard";
import { Si99Designs, SiBehance, SiCss3, SiHtml5, SiMysql, SiPhp, SiPython } from "react-icons/si";


const workData = {
    title: "Lantern",
    description:
        "Lantern helps you close deals faster and smarter. Consolidate customer, prospect, and intent data, streamline sales tools, and use AI-powered insights.",
    techs: [
        { name: "Python", icon: SiPython },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "MySQL", icon: SiMysql },
        { name: "PHP", icon: SiPhp },
    ],
};

const workData2 = {
    title: "Bortas",
    description:
        "Lantern you close deals faster and .  , prospect, and intent data, streamline sales tools, and use AI-powered insights.",
    techs: [
        { name: "99Designs", icon: Si99Designs },
        { name: "Behance", icon: SiBehance },
        { name: "CSS", icon: SiCss3 },
        { name: "MySQL", icon: SiMysql },
        { name: "PHP", icon: SiPhp },
    ],
};


export const WorkPage: React.FC = () => {

    return (
        <section id="work" className="work-wrapper">
            <div className="workTitle">
                <h1>WORK</h1>
                <p>Check out some of my recent work – cool products I’ve been part of, built using the latest tech and libraries to create something awesome!</p>
            </div>
            <div className="cardsArea">
                <WorkCard {...workData}/>
                <WorkCard {...workData2}/>
                <WorkCard {...workData}/>
                <WorkCard {...workData}/>

            </div>
        </section>
    );
};
