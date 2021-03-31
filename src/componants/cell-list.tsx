import CodeCell from './codeCell'
import TextEditor from './text-editor'
import { useTypedSelector } from '../hooks/use-typed-selector'

interface Props { }

function CellList(props: Props) {
    const { } = props
    useTypedSelector(({ cells: { order, data } }) =>
        order.map((id) => data[id])
    )
    return (
        <div></div>
    )
}

export default CellList
