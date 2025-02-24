import React, { useContext, useEffect, useState } from "react";
import { Task } from "../../Interfaces/TaskInterface";
import "../../css/tasks.css";
import ProgressBar from "../../common/ProgressBar";
import { getTaskProgress } from "../../utils/timeUtils";
import Button from "../../common/Button";
import TaskService from "../../api/services/TaskService";
import TasksContext from "../../context/TasksContext";

interface TaskListProps {
    tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    const [tick, setTick] = useState<number>(Date.now());
    const task = useContext(TasksContext);

    const handleDelete = async (id: number) => {
        if (id === undefined) {
            return;
        }

        const success = await TaskService.deleteTask(id);
        if (success) {
            task.refreshTasks();
            console.log("Zadanie zostało usunięte.");
        } else {
            console.error("Nie udało się usunąć zadania.");
        }
    };



    useEffect(() => {
        // Odświeżamy co 60 sekund
        const timer = setInterval(() => {
            setTick(Date.now());
        }, 30_000);

        // Wyczyszczenie interwału w unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="task-list">
            <table className="task-list-table">
                <thead className="task-list-table-thead">
                    <tr>
                        <th>Title</th>
                        <th>Progress</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody className="task-list-table-tbody">
                    {tasks.map((task) => {
                        const progress = getTaskProgress(task);

                        return (
                            <tr key={task.task_Id}>
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
                                        onClick={() =>
                                            handleDelete(task.task_Id!)
                                        }
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
