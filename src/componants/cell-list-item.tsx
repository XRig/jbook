import React from 'react'
import {Cell} from '../state'
import CodeCell from './code-cell'
import TextEditor from './text-editor'
import ActionBar from './action-bar'
interface Props {
    cell: Cell
}

function CellList(props: Props) {
    const {cell} = props
    let child:JSX.Element;
    child = cell.type === 'code' ? <CodeCell cell={cell}/> :<TextEditor cell={cell}/>
   

    return (
       
       <div>
            <ActionBar id={cell.id}/>
           {child}</div> 
    )
}

export default CellList
