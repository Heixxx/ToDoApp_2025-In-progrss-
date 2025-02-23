import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/navPanel.css";
import PremiumButton from "../../common/PremiumButton";

interface NavPanelProps {
    isDesktop: boolean;
}

const NavPanel: React.FC<NavPanelProps> = ({ isDesktop }) => {
    const [theme, setTheme] = useState<boolean>(false);
    const test = () => {
        console.log("test");
    };

    const hangleTheme = () => {
        setTheme(!theme);
    };

    return (
        <div className="navpanel">
            <div className="navpanel__table">
                <Link to={"/"} className="link row" onClick={test}>
                    <img src="/icons/accountIcon.svg" alt=""></img>
                    <p>View Profile</p>
                </Link>
                <Link to={"/"} className="link row" onClick={test}>
                    <img src="/icons/settingsIcon.svg" alt=""></img>
                    <p>Manage account</p>
                </Link>
                <Link to={"/"} className="link row" onClick={hangleTheme}>
                    <img src="/icons/accountIcon.svg" alt=""></img>
                    <p>{theme ? 'dark' : 'light'}</p>
                </Link>
                <div className="separate"></div>
                <Link to={"/"} className="link row" onClick={test}>
                    <img src="" alt=""></img>
                    <p>Statistics</p>
                </Link>
                <div className="separate"></div>
                <Link to={"/"} className="link row" onClick={test}>
                    <img src="/icons/settingsIcon.svg" alt=""></img>
                    <p>Log out</p>
                </Link>
                <div className="premium-btn">
                    {!isDesktop ? <PremiumButton></PremiumButton> : ""}
                </div>
            </div>
        </div>
    );
};

export default NavPanel;
