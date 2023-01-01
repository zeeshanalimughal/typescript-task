import './App.css';
import { useState, useEffect } from 'react'
import { BuildHierarchyTree } from './Employee/BuildHierarchyTree';
import Nestable from 'react-nestable';
import 'react-nestable/dist/styles/index.css';
import { History } from './Employee/History';

function App() {

  const [lines, setLines] = useState([
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
  ])


  const [tree, setTree] = useState(new BuildHierarchyTree());
  const [itemsData, setItemsData]: any = useState([...Array.from(tree.readDataAndCreateMap(lines))][0])
  const [items, setItems] :any= useState([])
  const [history, setHistory]: any = useState(new History(items));
  tree.buildHierarchyTree(tree.root);

  useEffect(() =>{
  setItems([Array.from(tree?.employees)[0][1]])
  history.history[0] = [Array.from(tree?.employees)[0][1]]
  },[])

  

  const handlerMethod = (e: any) => {
    history.saveListToHistory(e.items)
  }

  const undo = () => {
    setItems(history.undo())
  }
  const redo = () => {
    setItems(history.redo())
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
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </div>
  );
}

export default App;
