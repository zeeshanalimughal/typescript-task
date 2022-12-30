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

}