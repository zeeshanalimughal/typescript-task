import { IEmployee } from './../types/employee';
import { IEmployeeOrgApp } from "../types/employee";

export class Employee implements IEmployeeOrgApp {
    id: number;
    name: string;
    supervisorID: number;
    children: IEmployee[];

    constructor(id: any, name: string, supervisorID: number, children: IEmployee[]) {
        this.id = id;
        this.name = name;
        this.supervisorID = supervisorID;
        this.children = children;
    }

    move(items: [any], employeeID: number, supervisorID: Number): any {
        const emp = items.filter((item: [Number, String, Number]) => item[0] === employeeID);
        items.splice(items.indexOf(emp[0]), 1, [employeeID, emp[0][1], supervisorID])
        return items;
    }
}