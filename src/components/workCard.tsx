import React from "react";
import work1image from "../assets/work1.svg";
import { TechBadge } from "./techBadge";
import { IconType } from "react-icons";

interface IWorkCard {
    title: string;
    description: string;
    techs: {
        name: string;
        icon: IconType;
    }[];
}


export const WorkCard: React.FC<IWorkCard> = ({ title, description, techs }) => {
    return (
        <div className="card">
            <img src={work1image} alt="" />

            <div className="secondRow">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="techBadges">
                {techs.map((tech, index) => (
                    <TechBadge key={index} tech={tech.name} icon={tech.icon} />
                ))}
            </div>
        </div>
    );
};
