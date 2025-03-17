import React, { useContext, useEffect, useState } from "react";
import "../../css/addTaskPanel.css";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { Task } from "../../Interfaces/TaskInterface";
import TasksContext from "../../context/TasksContext";
import TaskService from "../../api/services/TaskService";

interface AddTaskFormProps {
    // onAddTask: (data: Task) => void;
    // onChange: (data: any) => void;
}

const getLocalDateTimeString = (date: Date) => {
    const offset = date.getTimezoneOffset() * 60000;
    const localISOTime = new Date(date.getTime() - offset).toISOString();
    return localISOTime.slice(0, 16);
};

const AddTaskForm: React.FC<AddTaskFormProps> = () => {
    const { tasks, addTask } = useContext(TasksContext);
    const [title, setTitle] = useState("");
    const [endDateTime, setEndDateTime] = useState("");
    const [startDateTime, setStartDateTime] = useState("");
    // const taskContext = useContext(TasksContext);
    // const [state, dispatch] = useReducer(ticketReducer, initialState);

    useEffect(() => {
        const now = new Date();
        const start = getLocalDateTimeString(now);
        const end = getLocalDateTimeString(new Date(now.getTime() + 3600000)); // +1 godzina
        setStartDateTime(start);
        setEndDateTime(end);
    }, []);

    // start_date: "2025-03-20",
    // end_date: "2025-03-20",
    // start_time: format(date, "HH:mm"),
    // end_time: format(addHours(date, 1), "HH:mm"),

    const clearForm = () => {
        setTitle("");
        setEndDateTime("");
        // setStartDate("");
        // setEndDate("");
        // setStartTime("");
        // setEndTime("");
    };
    const handleAddTask = async (data: Omit<Task, "task_Id">) => {
        try {
            await addTask({
                title: data.title,
                start_Date: data.start_Date,
                end_Date: data.end_Date,
                start_Time: data.start_Time,
                end_Time: data.end_Time,
                user_Id: 0,
            });
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(title.length === 0 || !endDateTime){
            // TOASTR!!!

            return;
        }
        const newTask: Task = {
            title,
            start_Date: startDateTime.slice(0, 10), // Tylko data
            start_Time: startDateTime.slice(11, 16), // Tylko czas
            end_Date: endDateTime.slice(0, 10),
            end_Time: endDateTime.slice(11, 16),
            user_Id: 0,
        };

        handleAddTask(newTask);
        clearForm();
    };

    return (
        <form onSubmit={handleSubmit} className="addForm">
            <div className="addForm__section">
                <h3 className="addForm__section-text">Title</h3>
                <Input onChange={(value) => setTitle(value)} value={title} />
            </div>
            <div className="addForm__section">
                <h3 className="addForm__section-text">End Date</h3>
                <Input
                    type="datetime-local"
                    onChange={(value) => setEndDateTime(value)}
                    value={endDateTime}
                />
            </div>
            <div className="addForm__section--btn">
                <Button text="Add new task" type="submit" variant="blue">
                    <img src="/icons/plusIcon.svg" alt="Add" />
                </Button>
            </div>
        </form>
    );
};

export default AddTaskForm;
