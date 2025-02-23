import React from "react";
import "../css/global.css";

const InProductionComponent: React.FC = () => {
    return (
        <div className="production">
            <h3>--In production--</h3>
            <div className="icon"><img src="/icons/man-working.png" alt="man-working"></img></div>
            <div className="icon"><img src="/icons/system.png" alt="system"></img></div>
        </div>
    );
};

export default InProductionComponent;
