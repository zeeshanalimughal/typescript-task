import { IEmployee } from './../types/employee';
import { IEmployeeOrgApp } from "../types/employee";
import { History } from './History';
import { BuildHierarchyTree } from './BuildHierarchyTree';

export class Employee implements IEmployeeOrgApp {
    id: number;
    text: string;
    supervisorID: number;
    children: IEmployee[];
    history = new History()

    constructor(id: any, text: string, supervisorID: number, children: IEmployee[]) {
        this.id = id;
        this.text = text;
        this.supervisorID = supervisorID;
        this.children = children;
    }

    move(items: [any], employeeID: number, supervisorID: Number): any {
        this.history.saveListToHistory([...items])
        const emp = items.filter((item: [Number, String, Number]) => item[0] === employeeID);
        items.splice(items.indexOf(emp[0]), 1, [employeeID, emp[0][1], supervisorID])
        return [items,this.history.getAllHistory()];
    }
}