import { useEffect, useRef, useState } from 'react';
import './App.css';
import { BuildHierarchyTree } from './Employee/BuildHierarchyTree';
import { IEmployee } from './types/employee';
import Nestable from 'react-nestable';
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
  // let data = tree.readDataAndCreateMap(lines);
  // console.log(8,data)

  let data = tree.readDataAndCreateMap(tree.move(lines, 8, 5))
  data = tree.undoNodeStructure()
  data = tree.readDataAndCreateMap(data);
  const itemsData = [...Array.from(data)][0]

  tree.buildHierarchyTree(tree.root);

  const items: any = [itemsData]
  // console.log(items)

  const handlerMethod = (e: any) => {
    console.log(e)
  }


  const renderItem = ({ item }: any) => item.text;
  return (
    <div className="App">
      <Nestable
        items={items}
        renderItem={renderItem}
        onChange={handlerMethod}
        renderCollapseIcon={() => <span>›</span>}
      />
    </div>
  );
}

export default App;
