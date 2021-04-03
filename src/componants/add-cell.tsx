import './add-cell.css'
import { useAction } from '../hooks'
import AddCellButton from './add-cell-button';


interface Props {
    lastCellId: string | null;
    forceVisible?:boolean
}

function AddCell(props: Props) {
    const { lastCellId: nextCellId, forceVisible} = props
    const { insertCellAfter } = useAction();

    return (
        <div className={`add-cell${(forceVisible && ' force-visible')||''}`}>
            <div className="add-buttons">
                <AddCellButton onClick={() => insertCellAfter(nextCellId, 'code')}>Code</AddCellButton>
                <AddCellButton onClick={() => insertCellAfter(nextCellId, 'text')}>Text</AddCellButton>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default AddCell
