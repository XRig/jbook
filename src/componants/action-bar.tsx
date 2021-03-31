import React from 'react'
import { useAction } from '../hooks'
import './action-bar.css'

interface Props {
    id: string
}

function ActionBar(props: Props) {
    const { id } = props
    const { moveCell, deleteCell } = useAction();

    return (<div className="action-bar">
        <button className="button is-primary is-small" onClick={() => { moveCell(id, 'up') }}>
            <span className="icon">
                <i className="fas fa-arrow-up" />
            </span>
        </button>
        <button className="button is-primary is-small" onClick={() => { moveCell(id, 'down') }}>
            <span className="icon">
                <i className="fas fa-arrow-down" />
            </span>
        </button>
        <button className="button is-danger is-small" onClick={() => { deleteCell(id) }}>
            <span className="icon">
                <i className="fas fa-times" />
            </span>
        </button>
    </div>

    )
}

export default ActionBar
