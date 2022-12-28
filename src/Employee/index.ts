import { IEmployeeOrgApp, IEmployee } from "../types/employee"
export class EmployeeOrgApp implements IEmployeeOrgApp {
    ceo: IEmployee;
    constructor(employee: IEmployee) {
        this.ceo = employee;
    }
    getEmployee() {
        return this.ceo
    }
    addEmployee(employee: IEmployee) {
        this.ceo.subordinates.push(employee)
    }

    // delete(employeeID: number, supervisorID: number): void {
    //     this.ceo.subordinates.forEach(employee =>{
    //         if(employee.uniqueId===employeeID){
    //             this.ceo.subordinates = this.ceo.subordinates.filter(employ=>employ.uniqueId!==employeeID)
    //         }
    //     })
    // };

    move(employeeID: number, supervisorID: number): void {
       
    };
    /** Undo last move action */
    undo(): void {

    };
    /** Redo last undone action */
    redo(): void {

    };
}