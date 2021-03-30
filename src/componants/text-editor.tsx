import { useState, useEffect} from "react";
import MDEditor from '@uiw/react-md-editor';

interface Props { }

function TextEditor(props: Props) {
    const { } = props
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState("**Hello world!!!**");


    useEffect(() => {
        const listener = () => {setEditing(false)}
        window.addEventListener('click',listener, {capture:true})

        return () => {
            document.removeEventListener('click',listener, {capture:true})
        }
    },[])
    if (!editing) {
        return <div onClick={() => setEditing(true)}> <MDEditor.Markdown source={value} /> </div>
    }
    return (
        <div className="container">
            <MDEditor
                value={value} />
        </div>
    );

}

export default TextEditor
