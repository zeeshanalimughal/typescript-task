import { useEffect, useRef, useState } from 'react';
import './App.css';
import { BuildHierarchyTree } from './Employee/BuildHierarchyTree';
import { IEmployee } from './types/employee';
import Nestable from 'react-nestable';

// this usually goes once
// to the entry point of the whole app
// (e.g. src/index.js)
import 'react-nestable/dist/styles/index.css';

function App() {

  // ["Mark Zuckerberg", [
  //   [
  //     "Sarah Donald", [
  //     ["Cassandra Reynolds", []]
  //     ]
  //   ],
  //   [
  //     "Tyler Simpson", [
  //       ['Harry Tobs', []],
  //       ["George Carrey", []],
  //       ["Gary Styles", []],
  //     ]
  //   ],
  //   ["Bruce Willis"],
  //   ["Georgina Flangy"],
  // ]],

  const lines = [
    [1, "Mark Zuckerberg"],
    [2, "Sarah Donald", 1],
    [3, "Cassandra Reynolds", 2],
    [4, "Mary Blue", 3],
    [5, "Bob Saget", 3],
    [6, "Tina Teff", 5],
    [7, "Will Turner", 6],
    [8, "Tyler Simpson", 1],
    [9, "Harry Tobs", 8],
    [10, "Thomas Brown", 9],
    [11, "George Carrey", 8],
    [12, "Gary Styles", 8],
    [13, "Bruce Willis", 1],
    [14, "Georgina Flangy", 1],
    [15, "Sophie Turner", 14]
  ];

  const tree = new BuildHierarchyTree();
  tree.readDataAndCreateMap(lines);
  let data = tree.readDataAndCreateMap(lines);
  data = tree.readDataAndCreateMap(tree.move(lines, 8, 6))

  tree.buildHierarchyTree(tree.root);
  tree.printHierarchyTree(tree.root, 0);


  // const Ref: any = useRef(null);
  // const List = ({ complete_data }: any) => {
  //   return (
  //     <ul className="list-disc">
  //       {complete_data.map((x: IEmployee) => <Item key={x.id} data={x} />)}
  //     </ul>
  //   )
  // }
  // const exists: Number[] = []
  // const Item = ({ data }: any) => {
  //   if (exists.includes(data.id)) {
  //     return (<></>)
  //   } else {
  //     exists.push(data.id)
  //     return (
  //       <li className="ml-10">
  //         {data.name}
  //         {data.subordinates.length > 0 && (
  //           <ul className="list-disc">
  //             {data.subordinates.map((x: IEmployee) => <Item key={x.id} data={x} />)}
  //           </ul>
  //         )}
  //       </li>
  //     )
  //   }
  // }

  const items = Array.from(data).filter((value) => {
    return value.supervisorID === 0
  })

  const handlerMethod = (e: any) => {
    console.log(e)
  }


  const renderItem = ({ item }: any) => item.text;
  return (
    <div className="App">
      {/* <List complete_data={Array.from(data)} /> */}
      <Nestable
        items={items}
        renderItem={renderItem}
        maxDepth={1}
        threshold={1}
        // collapsed={true}
        onChange={handlerMethod}
        group={1}
        renderCollapseIcon={() => <span>›</span>}
      />
    </div>
  );
}

export default App;
