import { IEmployee } from './../types/employee';
import { History } from './History';
import { Employee } from './index';

export class BuildHierarchyTree {
    history = new History()
    employees: Map<number, IEmployee> = new Map();
    root: any;
    getSubsById(supervisorID: number) {
        var subs: IEmployee[] = [];
        for (const em of this.employees.values()) {
            if (+em.supervisorID === supervisorID)
                subs.push(em);
        }
        return subs;
    }

    readDataAndCreateMap(lines: any) {
        for (const items of lines) {
            const values: Array<any> = items;
            let employee: IEmployee;
            if (values.length >= 3)
                employee = new Employee(values[0], values[1], values[2], this.getSubsById(+values[2]));
            else
                employee = new Employee(+values[0], values[1], 0, this.getSubsById(+values[values.length - 1]));
            this.employees.set(+employee.id, employee);
            if (+employee.supervisorID === 0)
                this.root = employee;
        }
        return this.employees.values()
    }

    buildHierarchyTree(root: IEmployee) {
        var employee: IEmployee = root;
        var subs: IEmployee[] = this.getSubsById(+employee.id);
        employee.children = subs;
        if (subs.length === 0)
            return;
        for (const em of subs)
            this.buildHierarchyTree(em);
    }
    printHierarchyTree(root: IEmployee, level: number) {
        var str: String = "";
        for (let i = 0; i < level; i++)
            str += "\t";
        str += root.text
        // console.log(str);
        var subs = root.children;
        for (const em of subs)
            this.printHierarchyTree(em, level + 1);
    }

    move(items: any, employeeID: number, supervisorID: Number): any {
        if (employeeID === supervisorID) {
            return this.employees.values();
        }
        const buildHierarchy = new BuildHierarchyTree()
        const dataArray: any = buildHierarchy.readDataAndCreateMap(items)
        const emp = new Employee(dataArray.id, dataArray.text, dataArray.supervisorID, dataArray.children)

        let currentPointer: any = this.history.getPointer();
        this.history.updatePointer(currentPointer + 1);

        const [data, history] = emp.move(items, employeeID, supervisorID)
        this.history.saveListToHistory([...history])
        return data
    }


    undoNodeStructure(): any {
        let pointer: any = this.history.getPointer()
        const history = this.history.getAllHistory()
        return history[pointer - 1];
    }
    redodeStructure(): any {
        let pointer: any = this.history.getPointer()
        if (pointer <= this.history.getHistoryLength()) {
            const history = this.history.getAllHistory()
            return history[pointer + 1];
        } else {
            return [];
        }
    }

}