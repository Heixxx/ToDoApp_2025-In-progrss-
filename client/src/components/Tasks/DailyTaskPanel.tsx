import React, { useContext } from "react";
import "../../css/DailyTaskPanel.css";
import ProgressBar from "../../common/ProgressBar";
import UserContext from "../../context/UserContext";
import TasksContext from "../../context/TasksContext";

/**
 * Przycisk do dodawania nowego zadania: ma tekst + ikonkę "plus".
 */
const DailyTaskPanel: React.FC = () => {
    const { user } = useContext(UserContext);
    const { tasks } = useContext(TasksContext);

    const completedCount = tasks.filter((t) => t.completed).length;
    const completionPercent =
        tasks.length === 0
            ? 0
            : Math.round((completedCount / tasks.length) * 100);

    if (!user) {
        return <div>Unknown</div>;
    }

    return (
        <div className="daily-board">
            <h2 className="daily-board__title">Hello, {user.name}!</h2>
            <p className="daily-board__lenght">Daily tasks today: {tasks.length}</p>
            <div className="daily-board__progress">
                <span className="daily-board__progress-text">
                    Daily progress:
                </span>
                <ProgressBar percent={completionPercent} />
            </div>
        </div>
    );
};

export default DailyTaskPanel;
