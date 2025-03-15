import React from "react";
import { IconType } from "react-icons";

interface ITechBadge {
    icon: IconType;
    tech: string;
}

export const TechBadge: React.FC<ITechBadge> = ({ icon: Icon, tech }) => {
    return (
        <div className="techBadge">
            <Icon />
            <p>{tech}</p>
        </div>
    );
};
