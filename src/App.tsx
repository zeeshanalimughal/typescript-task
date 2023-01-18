import './App.css';
import { useState, useEffect } from 'react'
import { BuildHierarchyTree } from './Employee/BuildHierarchyTree';
import Nestable from 'react-nestable';
import 'react-nestable/dist/styles/index.css';
import { History } from './Employee/History';
import { IEmployee } from './types/employee'
function App() {

  const lines: Array<[number, string, number?]> = [
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
  ]


  const [tree, setTree] = useState(new BuildHierarchyTree());
  tree.readDataAndCreateMap(lines)
  const [items, setItems] = useState<IEmployee[]>([])
  const [history, setHistory] = useState(new History(items));
  tree.buildHierarchyTree(tree.root);
  let movingItem: any = {}
  let oldSuperviserId: Number = 0;

  useEffect(() => {
    setItems([Array.from(tree?.employees)[0][1]])
    history.history[0] = [Array.from(tree?.employees)[0][1]]
  }, [history.history])



  const handlerMethod = (e: any) => {
    if (history.history.length > 1 && history.pointer === 0) {
      history.pointer = 0;
      history.history.length = 1;
      setItems(history.history[0])
    }

    let flag = true;
    function parse(arr: any) {
      return arr.map((obj: any) => {
        Object.keys(obj).forEach(key => {
          if (Array.isArray(obj[key])) {
            parse(obj[key]);
          }
          if (obj.id === oldSuperviserId && flag) {
            flag = false
            JSON.parse(localStorage.getItem("childrens")!).forEach((child: any) => {
              obj.children.push(child);
            })
          }
        })
        return obj;
      })
    }

    const data: any = JSON.parse(JSON.stringify(e.items))
    parse(data)
    setItems(data)
    history.saveListToHistory(data)
  }

  const undo = (): void => {
    setItems(history.undo())
  }
  const redo = (): void => {
    setItems(history.redo())
  }

  function confirmUpdate(args: any) {
    movingItem = args.dragItem
    localStorage.setItem("childrens", JSON.stringify(args.dragItem?.children) || "[]")
    oldSuperviserId = args.dragItem.supervisorID
    args.dragItem.supervisorID = args.destinationParent.id
    args.dragItem.children.length = 0
    if (args.destinationParent === null) {
      return false
    } else { return true }
  }
  const renderItem = ({ item }: any) => item.name;
  return (
    <div className="App">
      <Nestable
        items={items}
        maxDepth={20}
        renderItem={renderItem}
        onChange={handlerMethod}
        confirmChange={confirmUpdate}
        renderCollapseIcon={() => <span>›</span>} />
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </div>
  );
}

export default App;