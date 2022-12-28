export interface IEmployee {
    uniqueId: number;
    name: string;
    subordinates: IEmployee[];
}
export interface IEmployeeOrgApp {
    ceo: IEmployee;
    move(employeeID: number, supervisorID: number): void;
    /** Undo last move action */
    undo(): void;
    /** Redo last undone action */
    redo(): void;
}