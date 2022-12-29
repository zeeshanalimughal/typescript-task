import { IEmployee } from './../types/employee';
import { IEmployeeOrgApp } from "../types/employee";

export class Employee implements IEmployeeOrgApp {
    id: number;
    text: string;
    supervisorID: number;
    children: IEmployee[];

    constructor(id: any, text: string, supervisorID: number, children: IEmployee[]) {
        this.id = id;
        this.text = text;
        this.supervisorID = supervisorID;
        this.children = children;
    }

    move(items:any,employeeID: number, supervisorID: Number): void {
        // const emp = items.filter((item:[Number,String,Number]) => item[0]===employeeID);
        // console.log(emp)
    }
    /** Undo last move action */
    undo(): void {

    };
    /** Redo last undone action */
    redo(): void {

    };
}