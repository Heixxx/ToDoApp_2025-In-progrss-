import { Task } from "../Interfaces/TaskInterface";

/*
 % of time 
 */
export function getTaskProgress(task: Task): number {
    const start = new Date(`${task.start_date}T${task.start_time}`);
    const end = new Date(`${task.end_date}T${task.end_time}`);
    const now = new Date();
    if (
        !task.start_date ||
        !task.end_date ||
        !task.start_time ||
        !task.end_time
    ) {
        return 0; // lub inna wartość domyślna
    }
    const totalMs = end.getTime() - start.getTime();
    if (totalMs <= 0) {
        // Jeśli data końca <= data startu, traktujemy to jako 100% lub 0%.
        // Można tu dostosować logikę wg potrzeb
        return 100;
    }

    // time pass
    const elapsedMs = now.getTime() - start.getTime();
    let ratio = elapsedMs / totalMs;

    if (ratio < 0) ratio = 0;
    if (ratio > 1) ratio = 1;
    console.log(Math.round(ratio * 100));
    return Math.round(ratio * 100);
}

/**
 * Zwraca string z pozostałym czasem do zakończenia w formacie:
 *  - Xd, Yh (jeśli >= 24h do końca)
 *  - Xh:Ym (jeśli < 24h do końca)
 *  - "Time is up!" jeśli zadanie już się zakończyło
 */
export function getTimeLeftString(task: Task): string {
    const end = new Date(`${task.end_date}T${task.end_time}`);
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
