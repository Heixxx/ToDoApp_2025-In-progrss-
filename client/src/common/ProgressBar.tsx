import React from "react";
import "../css/progressBar.css";

interface ProgressBarProps {
    percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
    return (
        <div className="progress">
            <div className="progress-bar">
                <div
                    className="progress-bar__fill"
                    style={{ width: `${percent}%` }}
                />
                <span className="progress-bar__label">{percent}%</span>
            </div>
        </div>
    );
};

export default ProgressBar;
