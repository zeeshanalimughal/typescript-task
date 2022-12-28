import React from 'react'
import { UncontrolledTreeEnvironment } from 'react-complex-tree'
import { Tree } from 'react-complex-tree/lib/esm/tree/Tree'
import { StaticTreeDataProvider } from 'react-complex-tree/lib/esm/uncontrolledEnvironment/StaticTreeDataProvider'
import { longTree } from "./data";
import "react-complex-tree/lib/style.css";


function ListBox() {
  return (
    <UncontrolledTreeEnvironment
    dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}
    getItemTitle={item => item.data}
    viewState={{}}
    canDragAndDrop={true}
    canReorderItems={true}
  >
    <Tree treeId="tree-2" rootItem="root" treeLabel="Tree Example" />
  </UncontrolledTreeEnvironment>
  )
}

export default ListBox