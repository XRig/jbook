import { useState, useEffect, useRef } from "react";
import MDEditor from '@uiw/react-md-editor';
import './text-editor.css'

interface Props { }

function TextEditor(props: Props) {
    const { } = props
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState("# Enter Text");
    const ref = useRef<HTMLDivElement|null>(null)

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if(!ref.current) return;
            if(event.target && ref.current.contains(event.target as Node)) return;
            setEditing(false)
        }
        window.addEventListener('click', listener, { capture: true })

        return () => {
            document.removeEventListener('click', listener, { capture: true })
        }
    }, [])
    if (!editing) {
        return <div className='text-editor' onClick={() => setEditing(true)}> <MDEditor.Markdown source={value} /> </div>
    }
    return (
        <div className="text-editor" ref={ref}>
            <MDEditor
                value={value} 
                onChange={(v) =>setValue(v ||'' )}/>
        </div>
    );

}

export default TextEditor
