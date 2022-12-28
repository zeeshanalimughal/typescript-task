import './App.css';
import { BuildHierarchyTree } from './Employee/BuildHierarchyTree';
// import { EmployeeOrgApp } from './Employee';
// import { IEmployee } from './types/employee'
function App() {

  // const lines = [
  //   [1], "Mark Zuckerberg",
  //   [2], "Sarah Donald", [1],
  //   [3], "Cassandra Reynolds", [2],
  //   [4], "Mary Blue", [3],
  //   [5], "Bob Saget", [3],
  //   [6], "Tina Teff", [5],
  //   [7], "Will Turner", [6],
  //   [8], "Tyler Simpson", [1],
  //   [9], "Harry Tobs", [8],
  //   [10], "Thomas Brown", [9],
  //   [11], "George Carrey", [8],
  //   [12], "Gary Styles", [8],
  //   [13], "Bruce Willis", [1],
  //   [14], "Georgina Flangy", [1],
  //   [15], "Sophie Turner", [14],
  // ];


  const lines = [
    "1 Mark Zuckerberg",
    "2 Sarah Donald 1",
    "3 Cassandra Reynolds 2",
    "4 Mary Blue 3",
    "5 Bob Saget 3",
    "6 Tina Teff 5",
    "7 Will Turner 6",
    "8 Tyler Simpson 1",
    "9 Harry Tobs 8",
    "10 Thomas Brown 9",
    "11 George Carrey 8",
    "12 Gary Styles 8",
    "13 Bruce Willis 1",
    "14 Georgina Flangy 1",
    "15 Sophie Turner 14",
  ];

  const updateUnder = " 3"
  const tree = new BuildHierarchyTree();
  // tree.readDataAndCreateMap(lines);
  // tree.buildHierarchyTree(tree.root);
  // tree.printHierarchyTree(tree.root, 0);
  // const history = [];
  // history.push("6 Tina Teff 5")
 const updatedLines : string[] =  lines.map((line:any) =>{
    if(line.includes("6 Tina Teff 5")){
      line = line.split(" ")
      line.pop();
      line = line.join(" ")
      line+=updateUnder
    }
    return line
  })
  // console.log(lines.includes("6 Tina Teff 5"))
  tree.readDataAndCreateMap(updatedLines);
  tree.buildHierarchyTree(tree.root);
  tree.printHierarchyTree(tree.root, 0);
  


  // const empl: IEmployee = {
  //   uniqueId: 1,
  //   name: "Mark Zuckerberg",
  //   subordinates: []
  // }
  // const emp = new EmployeeOrgApp(empl)

  // emp.addEmployee({ uniqueId: 3, name: "Tyler Simpson", subordinates: [] })
  // emp.addEmployee({ uniqueId: 4, name: "Bruce Willis", subordinates: [] })
  // emp.addEmployee({ uniqueId: 5, name: "Georgina Flangy", subordinates: [] })
  // emp.addEmployee({
  //   uniqueId: 2, name: "Sarah Donald", subordinates: [
  //     {
  //       uniqueId: 6, name: "Sophie Turner", subordinates: [
  //         {
  //           uniqueId: 6, name: "A", subordinates: [
  //             {
  //               uniqueId: 6, name: "B", subordinates: [{ uniqueId: 6, name: "C", subordinates: [] }]
  //             }]
  //         }]
  //     }
  //   ]
  // })

  // const func = (arr: any) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (typeof arr[i] == 'object') {
  //       console.log(arr[i]);
  //       arr[i] = func(arr[i].subordinates);

  //     } else {
  //       return
  //     }
  //   }

  //   return arr;
  // }

  // func(emp.getEmployee().subordinates)


  return (
    <div className="App">
      <ul>
        {/* <li>{emp.getEmployee().name}</li> */}
        <ul>
          {/* {func(emp.getEmployee().subordinates)} */}
        </ul>
      </ul>
    </div>
  );
}

export default App;
