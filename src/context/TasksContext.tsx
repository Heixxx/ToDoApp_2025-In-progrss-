import React, { useEffect, useState, createContext } from "react";
import { format, addDays, addHours } from "date-fns";
import {Task} from '../Interfaces/TaskInterface';
import {BaseProvider} from '../Providers/BaseProvider';

export const TasksContext = createContext<{ tasks: Task[] }>({ tasks: [] });


const date = new Date();
const tasksArray: Task[] = [
    {
        id: 1,
        start_date: format(date, "yyyy-MM-dd"),
        end_date: format(addDays(date, 2), "yyyy-MM-dd"),
        start_time: format(date, "HH:mm"),
        end_time: format(addHours(date, 3), "HH:mm"),
    },
    {
        id: 2,
        start_date: format(addDays(date, 1), "yyyy-MM-dd"),
        end_date: format(addDays(date, 3), "yyyy-MM-dd"),
        start_time: format(addHours(date, 1), "HH:mm"),
        end_time: format(addHours(date, 4), "HH:mm"),
    },
];

export const TasksProvider: React.FC<BaseProvider> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        setTasks(tasksArray);
        console.log(tasks);
    }, [tasks]);

    return (
        <TasksContext.Provider value={{ tasks }}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContext;
