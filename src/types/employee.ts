export interface IEmployee {
    id: number;
    text: string;
    supervisorID: number;
    children: IEmployee[];
}
export  interface IEmployeeOrgApp {
    id: number;
    text: string;
    supervisorID: number;
    children: IEmployee[];

    move(items:any,employeeID: number, supervisorID: number): void;
    /** Undo last move action */
    undo(): void;
    /** Redo last undone action */
    redo(): void;
}