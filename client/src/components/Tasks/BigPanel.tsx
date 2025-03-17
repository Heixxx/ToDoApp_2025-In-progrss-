import React, { useContext, useState } from "react";
import "../../css/bigPanel.css";
import TasksContext from "../../context/TasksContext";
import TaskList from "./TaskList";
import DailyTaskPanel from "./DailyTaskPanel";
import AddTaskForm from "./AddTaskForm";
import { Task } from "../../Interfaces/TaskInterface";
import InProductionComponent from "../../temporary/InProductionComponent";

const BigPanel: React.FC = () => {
    const { tasks, addTask } = useContext(TasksContext);

    return (
        <div className="big-panel container">
            <h2 className="big-panel__title">Dashboard</h2>

            <div className="big-panel__grid">
                <div className="miniPanel">
                    <DailyTaskPanel></DailyTaskPanel>
                </div>
                <div className="miniPanel">
                    <h2>
                        <span>Progress</span>
                    </h2>
                    <div className="line"></div>
                    <TaskList tasks={tasks}/>
                </div>
                <div className="miniPanel">
                    <h2>
                        <span>Add Task</span>
                    </h2>
                    <div className="line"></div>
                    <AddTaskForm></AddTaskForm>
                </div>
                <div className="miniPanel">
                    <h2>
                        <span>Tasks Ended Today</span>
                    </h2>
                    <div className="line"></div>
                    <InProductionComponent></InProductionComponent>
                </div>
                <div className="miniPanel">
                    <h2>
                        <span>Tasks Statistics</span>
                    </h2>
                    <div className="line"></div>
                    <InProductionComponent></InProductionComponent>
                </div>
                <div className="miniPanel">
                    <h2>
                        <span>Monthly Tasks</span>
                    </h2>
                    <div className="line"></div>
                    <InProductionComponent></InProductionComponent>
                </div>
            </div>
        </div>
    );
};

export default BigPanel;
