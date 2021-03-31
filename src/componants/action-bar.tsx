import React from 'react'
import { useAction } from '../hooks'

interface Props {
    id: string
}

function ActionBar(props: Props) {
    const { id } = props
    const { moveCell, deleteCell } = useAction();

    return (<div>
        <button onClick={() => { moveCell(id, 'up') }}>Up</button>
        <button onClick={() => { moveCell(id, 'down') }}>Down</button>
        <button onClick={() => { deleteCell(id) }}>Delete</button>
    </div>

    )
}

export default ActionBar
