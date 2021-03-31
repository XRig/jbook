import { useState, useEffect, useRef } from "react";
import { useAction } from '../hooks/use-action'
import MDEditor from '@uiw/react-md-editor';
import { Cell } from '../state'
import './text-editor.css'

interface Props {
    cell: Cell
}

function TextEditor(props: Props) {
    const {cell} = props
    const [editing, setEditing] = useState(false)
    //const [value, setValue] = useState("# Enter Text");
    const { updateCell } = useAction();
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (!ref.current) return;
            if (event.target && ref.current.contains(event.target as Node)) return;
            setEditing(false)
        }
        window.addEventListener('click', listener, { capture: true })

        return () => {
            document.removeEventListener('click', listener, { capture: true })
        }
    }, [])
    if (!editing) {
        return (
            <div className='text-editor card' onClick={() => setEditing(true)}>
                <div className="card-content">

                    <MDEditor.Markdown source={cell.content} /> </div>
            </div>
        )
    }
    return (
        <div className="text-editor" ref={ref}>
            <MDEditor
                value={cell.content}
                onChange={(v) => updateCell(cell.id, v || '')} />
        </div>
    );

}

export default TextEditor
