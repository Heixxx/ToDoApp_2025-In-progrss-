import React, { useEffect, useState } from "react";
import { Task } from "../../Interfaces/TaskInterface";
import "../../css/tasks.css"; // SCSS z stylami do listy zadań
import ProgressBar from "../../common/ProgressBar";
import { getTaskProgress, getTimeLeftString } from "../../utils/timeUtils";
import Button from "../../common/Button";

interface TaskListProps {
    tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    const [tick, setTick] = useState<number>(Date.now());

    useEffect(() => {
        // Odświeżamy co 60 sekund
        const timer = setInterval(() => {
            setTick(Date.now());
        }, 60_000);

        // Wyczyszczenie interwału w unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="task-list">
            <table className="task-list-table">
                <thead className="task-list-table-thead">
                    <tr>
                        <th className="task-list__title">Title</th>
                        <th>Progress</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody className="task-list-table-tbody">
                    {tasks.map((task) => {
                        const progress = getTaskProgress(task);

                        return (
                            <tr key={task.task_id}>
                                <td className="title">
                                    <p>{task.title}</p>
                                </td>
                                <td>
                                    <div className="progressBar">
                                        <ProgressBar percent={progress} />
                                    </div>
                                </td>
                                <td className="list-btn">
                                    {!task.completed ? (
                                        <Button
                                            text="Yes"
                                            onClick={() => null}
                                            variant="blue"
                                        />
                                    ) : (
                                        <Button
                                            text="No"
                                            onClick={() => null}
                                            variant="violet"
                                        />
                                    )}
                                    <Button
                                        text="X"
                                        onClick={() => null}
                                        variant="red"
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
