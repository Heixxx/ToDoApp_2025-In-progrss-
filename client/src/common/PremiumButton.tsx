import React from "react";
import '../../src/css/PremiumButton.css';
import { useNavigate } from "react-router-dom";

const PremiumButton = () => {
    const navigation = useNavigate();

    const handleNavigate = () =>{
        navigation("/premium")
    }

    return (
        <button className="nav_pc__right-premium" onClick={handleNavigate}>
            <div className="nav_pc__right-premium-div">
                <div className="center"><p>Go Premium!</p></div>
            </div>
        </button>
    );
};
export default PremiumButton;