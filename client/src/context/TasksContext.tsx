import React, { useEffect, useState, createContext } from "react";
// import { format, addDays, addHours } from "date-fns";
import { Task } from "../Interfaces/TaskInterface";
import { BaseProvider } from "../Providers/BaseProvider";
import TaskService from "../api/services/TaskService";

export const TasksContext = createContext<{ tasks: Task[] }>({ tasks: [] });

const date = new Date();
// const tasksArray: Task[] = [
//     {
//         id: 1,
//         title: 'fff',
//         completed: false,
//         start_date: "2025-02-20",
//         end_date: "2025-02-20",
//         start_time: format(date, "HH:mm"),
//         end_time: format(addHours(date, 1), "HH:mm"),
//     },
//     {
//         id: 2,
//         title: 'fff',
//         completed: false,
//         start_date: format(addDays(date, 1), "yyyy-MM-dd"),
//         end_date: format(addDays(date, 3), "yyyy-MM-dd"),
//         start_time: format(addHours(date, 1), "HH:mm"),
//         end_time: format(addHours(date, 4), "HH:mm"),
//     },
//     {
//         id: 3,
//         title: 'fafsfasafsasfff',
//         completed: false,
//         start_date: "2025-02-20",
//         end_date: "2025-02-20",
//         start_time: format(date, "HH:mm"),
//         end_time: format(addHours(date, 1), "HH:mm"),
//     },
//     {
//         id: 4,
//         title: 'fffsfafsafsasff',
//         completed: true,
//         start_date: "2025-03-20",
//         end_date: "2025-03-20",
//         start_time: format(date, "HH:mm"),
//         end_time: format(addHours(date, 1), "HH:mm"),
//     },
//     {
//         id: 5,
//         title: 'fffsfafsafsasff',
//         completed: true,
//         start_date: "2025-03-20",
//         end_date: "2025-03-20",
//         start_time: format(date, "HH:mm"),
//         end_time: format(addHours(date, 1), "HH:mm"),
//     },
//     {
//         id: 6,
//         title: 'fffsfafsafsasff',
//         completed: true,
//         start_date: "2025-03-20",
//         end_date: "2025-03-20",
//         start_time: format(date, "HH:mm"),
//         end_time: format(addHours(date, 1), "HH:mm"),
//     },
//     {
//         id: 7,
//         title: 'fffsfafsafsasff',
//         completed: true,
//         start_date: "2025-03-20",
//         end_date: "2025-03-20",
//         start_time: format(date, "HH:mm"),
//         end_time: format(addHours(date, 1), "HH:mm"),
//     },
//     {
//         id: 8,
//         title: 'fffsfafsafsasff',
//         completed: true,
//         start_date: "2025-03-20",
//         end_date: "2025-03-20",
//         start_time: format(date, "HH:mm"),
//         end_time: format(addHours(date, 1), "HH:mm"),
//     },
//     {
//         id: 9,
//         title: 'fffsfafsafas fs afs af saf asf as fasfa sfsasff',
//         completed: true,
//         start_date: "2025-03-20",
//         end_date: "2025-03-20",
//         start_time: format(date, "HH:mm"),
//         end_time: format(addHours(date, 1), "HH:mm"),
//     },
// ];

export const TasksProvider: React.FC<BaseProvider> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fechtData = async () => {
            const taskData = await TaskService.getTasks();
            if(taskData){
                setTasks(taskData);
            }
        };
        fechtData();
    }, []);

    return (
        <TasksContext.Provider value={{ tasks }}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContext;
