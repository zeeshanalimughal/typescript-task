export class Employee {
    id: string;
    name: string;
    managerId: any;
    subordinates: any;
    constructor(id:any, name:string, managerId:any) {
        this.id = id;
        this.name = name;
        this.managerId = managerId;
        this.subordinates = {};
    }
}
export class BuildHierarchyTree {
    employees :any =  new Map();
    root : any ;
    readDataAndCreateMap(lines:String[])  {        		
		for (const strLine of lines) { 			
			var values = strLine.split(" ");
            var employee;
			if (values.length >= 4)  						
				employee = new Employee(values[0], values[1] + " " + values[2], values[3]);		          
			else 
				employee = new Employee(values[0], values[1] + " " + values[2], "0");		
			this.employees.set(employee.id, employee);
			if (employee.managerId == 0) 
                this.root = employee;
		}
        console.log(this.employees.size);
	}
    getSubsById(managerId:number) {
        var subs = new Array();
        for (const em of this.employees.values()) {
            if (+em.managerId === managerId) 
                subs.push(em);
        }
        return subs;
   }
    buildHierarchyTree(root:Employee) {
        var employee = root;
        var subs = this.getSubsById(+employee.id);
        employee.subordinates = subs;
        if (subs.length == 0)
            return;
        for (const em of subs) 
           this.buildHierarchyTree(em);
    }	
    printHierarchyTree(root:Employee, level:number) {
        var str = "";
        for (let i = 0; i < level; i++) 
            str += "\t";
        str += root.name	 
        console.log(str);		 
        var subs = root.subordinates;
        for (const em of subs) 
            this.printHierarchyTree(em, level+1);
    }
}
