import MonacoEditor from '@monaco-editor/react';
import prettier from 'prettier'
import parser from 'prettier/parser-babel'
import { useRef } from 'react'
import './code-editor.css'

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string | undefined): void;
}


const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {

    const editorRef = useRef<any>()
    function handleEditorDidMount(editor:any, monaco:any) {
        editorRef.current = editor; 
      }

    const onFormatClick = () => {
        const unformatted = editorRef.current.getValue();
        const formatted = prettier.format(unformatted, {
            parser: 'babel',
            plugins:[parser],
            semi:true,
            singleQuote:true
        }).replace(/\n$/, '')
        editorRef.current.setValue(formatted)
    }
    return (
        <div className="editor-wrapper">
            <button className="button button-format is-primary is-small" onClick={onFormatClick}>Format</button>
            <MonacoEditor
                theme="vs-dark"
                onMount={handleEditorDidMount}
                defaultValue={initialValue}
                onChange={e => onChange(e)}
                height="20vh"
                language="javascript"
                options={{
                    wordWrap: 'on',
                    minimap: { enabled: false },
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2

                }} />
        </div>
    )
}

export default CodeEditor;