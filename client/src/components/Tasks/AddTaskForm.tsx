import React, { useEffect, useReducer, useState } from "react";
import "../../css/addTaskPanel.css";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { Task } from "../../Interfaces/TaskInterface";

interface AddTaskFormProps {
    onAddTask: (data: Task) => void;
    onChange: (data: any) => void;
}

/**
 * Przycisk do dodawania nowego zadania: ma tekst + ikonkę "plus".
 */
const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask, onChange }) => {
    const [title, setTitle] = useState("");
    const [endDateTime, setEndDateTime] = useState("");
    const [startDateTime, setStartDateTime] = useState("");
    // const [state, dispatch] = useReducer(ticketReducer, initialState);

    useEffect(() => {
        // const now = new Date();
        // const day = now.toISOString().slice(0, 10);
        // const hr = now.getHours().toString();
        // const min = now.getMinutes().toString().padStart(2, "0");
        // const time = hr + ":" + min;

        const now = new Date().toISOString().slice(0, 16); // yyyy-MM-ddTHH:mm
        const start = new Date().toISOString().slice(0, 16); // yyyy-MM-ddTHH:mm
        setStartDateTime(start);
        setEndDateTime(now);


        // setStartDate(day);
        // setStartTime(time);
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // without refresh

        const newTask: Task = {
            task_id: Date.now(),
            title,
            completed: false,
            start_date: startDateTime.slice(0, 10), // yyyy-MM-dd
            start_time: startDateTime.slice(11, 16), // HH:mm
            end_date: endDateTime.slice(0, 10), // yyyy-MM-dd
            end_time: endDateTime.slice(11, 16), // HH:mm
        };
        onAddTask(newTask);
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
