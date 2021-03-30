import { useState } from 'react'
import CodeEditor from './code-editor'
import Preview from './preview'
import bundle from '../bundler'
import Resizable from './resizable'

interface Props { }

function CodeCell(props: Props) {
    const { } = props
    const [input, setInput] = useState<string>('')
    const [code, setCode] = useState<string>('')

    const onClick = async () => {
        const output = await bundle(input)
        setCode(output)
    }
    
    return (
        <Resizable direction="vertical">
        <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal"> <CodeEditor initialValue="const a = 1;" onChange={e => setInput((e && e) || '')} /></Resizable>
        <Preview code={code} />
        </div>
    
    </Resizable >
    );
};


export default CodeCell
