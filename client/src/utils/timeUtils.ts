import { Task } from "../Interfaces/TaskInterface";

 export function getTaskProgress(task: Task): number {
    if (!task.start_Date || !task.end_Date || !task.start_Time || !task.end_Time) {
        return 0;
    }

    const start = new Date(`${task.start_Date}T${task.start_Time}`);
    const end = new Date(`${task.end_Date}T${task.end_Time}`);
    const now = new Date();

    const totalMs = end.getTime() - start.getTime();
    if (totalMs <= 0) return 100;

    const elapsedMs = now.getTime() - start.getTime();
    let ratio = elapsedMs / totalMs;

    ratio = Math.max(0, Math.min(1, ratio));
    return Math.round(ratio * 100);
}

export function getTimeLeftString(task: Task): string {
    const end = new Date(`${task.end_Date}T${task.end_Time}`);
    const now = new Date();

    const diffMs = end.getTime() - now.getTime();
    if (diffMs <= 0) {
        return "Time is up!";
    }

    const totalMinutes = Math.floor(diffMs / 1000 / 60); // ms -> min
    const days = Math.floor(totalMinutes / 1440); // 1440 min = 24h
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;

    // >= 24h
    if (days > 0) {
        return `${days}d, ${hours}h`;
    } else {
        // less than 24h -> "4h:39m"
        return `${hours}h:${minutes}m`;
    }
}
