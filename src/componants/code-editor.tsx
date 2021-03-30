import MonacoEditor from '@monaco-editor/react';
import prettier from 'prettier'
import parser from 'prettier/parser-babel'
import { useRef } from 'react'
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import MonacoJSXHighlighter from 'monaco-jsx-highlighter';
import './code-editor.css'
import './syntax.css'


interface CodeEditorProps {
    initialValue: string;
    onChange(value: string | undefined): void;
}


const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
    const editorRef = useRef<any>()



    //@ts-ignore
    const babelParse = code => parse(code, {
        sourceType: "module",
        plugins: ["jsx"]
    });


    const onEditorDidMount = (editor: any, monaco: any) => {
        editorRef.current = editor;
        const monacoJSXHighlighter = new MonacoJSXHighlighter(
            //@ts-ignore
            window.monaco, babelParse, traverse, editor)
        monacoJSXHighlighter.highLightOnDidChangeModelContent(100);


    }

    const onFormatClick = () => {
        const unformatted = editorRef.current.getValue();
        const formatted = prettier.format(unformatted, {
            parser: 'babel',
            plugins: [parser],
            semi: true,
            singleQuote: true
        }).replace(/\n$/, '')
        editorRef.current.setValue(formatted)
    }
    return (
        <div className="editor-wrapper">
            <button className="button button-format is-primary is-small" onClick={onFormatClick}>Format</button>
            <MonacoEditor
                theme="vs-dark"
                onMount={onEditorDidMount}
                defaultValue={initialValue}
                onChange={e => onChange(e)}
                height="100%"
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