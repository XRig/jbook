import React from 'react'
import { useAction } from '../hooks'
import './action-bar.css'
import ActionButton from './action-button'

interface Props {
    id: string
}

function ActionBar(props: Props) {
    const { id } = props
    const { moveCell, deleteCell } = useAction();

    return (
        <div className="action-bar">
            <ActionButton icon="fas fa-arrow-up" onClick={() => { moveCell(id, 'up') } }/>
            <ActionButton icon="fas fa-arrow-down" onClick={() => { moveCell(id, 'down') }}/>
            <ActionButton icon="fas fa-times" onClick={() => { deleteCell(id) }}/>
        </div>

    )
}

export default ActionBar
