export interface Task {
    id?: number; //Cuando creamos una task podría no venir
    text: string;
    day: string;
    reminder: boolean;
}