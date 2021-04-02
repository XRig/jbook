import './add-cell.css'
import { useAction } from '../hooks'

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

                <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(nextCellId, 'code')}>
                    <span className="icon is-small">
                    <i className="fas fa-plus" />
                    </span>
                    <span>Code</span>

                </button>
                <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(nextCellId, 'text')}>
                <span className="icon is-small">
                    <i className="fas fa-plus" />
                    </span>
                    <span>Text</span>
                </button>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default AddCell
