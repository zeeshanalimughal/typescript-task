import { IEmployee } from './../types/employee';
import { Employee } from './index';

export class BuildHierarchyTree {
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
        return this.employees.values();

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

   
    move(items:any,employeeID: number, supervisorID: Number): void {
        const emp = items.filter((item:[Number,String,Number]) => item[0]===employeeID);
        items.splice(items.indexOf(emp),1)
        items.push([employeeID,emp[0][1],supervisorID])
        return items
    }
    

    // createUiOfHierarchy(root: IEmployee, level: number) {
    //     const list: String[] = [];
    //     var str: String = "";
    //     for (let i = 0; i < level; i++) {
    //         str += "\t";
    //         if(level===1){
    //             str += "<ul>";
    //         }
    //         if (i === level - 1) {
    //             str += "<li>";
    //         }
    //     }
    //         str += root.name
    //         // str += "</li>";
    //         // str += "</ul>";
    //         console.log(str);
    //         const subs = root.children;
    //         for (const em of subs)
    //             this.createUiOfHierarchy(em, level + 1);
    //     }
}