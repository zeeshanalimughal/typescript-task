export interface IEmployee {
    id: number;
    name: string;
    supervisorID: number;
    children: IEmployee[];
}
export interface IEmployeeOrgApp {
    id: number;
    name: string;
    supervisorID: number;
    children: IEmployee[];
}