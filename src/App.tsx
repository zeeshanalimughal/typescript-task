import './App.css';
import { EmployeeOrgApp } from './Employee';
import { IEmployee } from './types/employee'
function App() {
  const empl: IEmployee = {
    uniqueId: 1,
    name: "Mark Zuckerberg",
    subordinates: []
  }
  const emp = new EmployeeOrgApp(empl)

  emp.addEmployee({ uniqueId: 3, name: "Tyler Simpson", subordinates: [] })
  emp.addEmployee({ uniqueId: 4, name: "Bruce Willis", subordinates: [] })
  emp.addEmployee({ uniqueId: 5, name: "Georgina Flangy", subordinates: [] })
  emp.addEmployee({
    uniqueId: 2, name: "Sarah Donald", subordinates: [
      {
        uniqueId: 6, name: "Sophie Turner", subordinates: [
          {
            uniqueId: 6, name: "A", subordinates: [
              {
                uniqueId: 6, name: "B", subordinates: [{ uniqueId: 6, name: "C", subordinates: [] }]
              }]
          }]
      }
    ]
  })

  // console.log(emp.getEmployee().subordinates)

  const func = (arr: any) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == 'object') {
        console.log(arr[i]);
        arr[i] = func(arr[i].subordinates);
      } else {
        return
      }
    }

    return arr;
  }

  func(emp.getEmployee().subordinates)


  return (
    <div className="App">
      <ul>
        <li>{emp.getEmployee().name}</li>
        <ul>
          {/* {func(emp.getEmployee().subordinates)} */}
        </ul>
      </ul>
    </div>
  );
}

export default App;
