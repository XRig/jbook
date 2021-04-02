
import { useTypedSelector } from '../hooks/use-typed-selector'
import CellListItem from './cell-list-item'
import AddCell from './add-cell'
import { Fragment } from 'react'


function CellList() {
    const cells = useTypedSelector(({ cells: { order, data } }) =>
        order.map((id) => data[id])
    )
    const renderedCells = cells.map(cell => {
        return (
            <Fragment key={cell.id}>
                <CellListItem cell={cell} />
                <AddCell lastCellId={cell.id} />
            </Fragment>
        )
    })
    return (
        <Fragment>
            <AddCell forceVisible={cells.length === 0} lastCellId={null} />
            {renderedCells}
        </Fragment>
    )
}
export default CellList
