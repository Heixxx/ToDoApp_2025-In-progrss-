import React, { useContext, useState } from "react";
import "../../css/bigPanel.css";
import TasksContext from "../../context/TasksContext";
import TaskList from "./TaskList";
import DailyTaskPanel from "./DailyTaskPanel";
import AddTaskForm from "./AddTaskForm";
import { Task } from "../../Interfaces/TaskInterface";
import InProductionComponent from "../../temporary/InProductionComponent";
import TaskService from "../../api/services/TaskService";

const BigPanel: React.FC = () => {
    const { tasks, addTask } = useContext(TasksContext);
    
    const handleAddTask = async (data: Omit<Task, 'task_Id'>) => {
        try {
          await  addTask({
            title: data.title,
            start_Date: data.start_Date,
            end_Date: data.end_Date,
            start_Time: data.start_Time,
            end_Time: data.end_Time,
            user_Id: 0
          });
          console.log(addTask);
        } catch (error) {
          console.error('Error adding task:', error);
        }
      };

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
                    <TaskList tasks={tasks} />
                </div>
                <div className="miniPanel">
                    <h2>
                        <span>Add Task</span>
                    </h2>
                    <div className="line"></div>
                    <AddTaskForm onAddTask={handleAddTask}></AddTaskForm>
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
